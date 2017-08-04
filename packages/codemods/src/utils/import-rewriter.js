const assert = require('assert');
const { inspect } = require('util');
const j = require('jscodeshift');

/**
 * Helper to build definitions for modules 
 * whose default symbol is re-expored using module name
 */
export const modulesThatExportDefault = (modules) =>
  modules.map(module => ({ type: 'default', oldName: module, module }));

/**
 * Helper to build definitions for modules
 * whose symbols where re-exported using the same names
 */
export const moduleDefinitions = (module, exportedSymbols) =>
  exportedSymbols.map(symbol => ({ type: 'keyword', oldName: symbol, module }));


export class ImportsRewriter {

  constructor(definitionsList, pathRewrite = (old, moduleName) => moduleName) {
    this.definitions = this._buildDefinitionsMap(definitionsList);
    this.pathRewrite = pathRewrite;
  }

  _buildDefinitionsMap(defList) {
    const defMap = {};
    for (const d of defList) {
      assert(
        ['default', 'keyword'].includes(d.type) &&
        typeof d.module === 'string' &&
        typeof d.oldName === 'string',
        `invalid definition: ${inspect(d)}`
      );
      defMap[d.oldName] = d;
    }
    return defMap;
  }

  rewrite(path) {
    const rewrites = {};

    const importsSpecifers = path.node.specifiers.filter(s => s.type === 'ImportSpecifier');
    assert(importsSpecifers.length === path.node.specifiers.length, `Can't migrate`);

    for (const s of importsSpecifers) {
      const importedSymbol = s.imported.name;
      if (importedSymbol in this.definitions) {
        const definition = this.definitions[importedSymbol];
        rewrites[definition.module] = rewrites[definition.module] || [];
        rewrites[definition.module].push(this._rewriteSpecifier(s, definition));
      } else {
        throw new Error(`unkown imported symbol: '${importedSymbol}', can't migrate`);
      }
    }

    const newImports = Object.keys(rewrites).map(moduleName =>
      j.importDeclaration(
        rewrites[moduleName], // specifiers
        j.literal(this.pathRewrite(path.node.source.value, moduleName))
      )
    );

    if (newImports.length > 0) {
      newImports.forEach(i => path.insertBefore(i));
      path.prune();
    }
  }

  _rewriteSpecifier(specifier, definition) {
    switch (definition.type) {
      case 'default':
        return j.importDefaultSpecifier(specifier.local);
      case 'keyword':
        return specifier;
      default:
        throw new Error(`invalid definition type: ${definition.type}`);
    }
  }
}
