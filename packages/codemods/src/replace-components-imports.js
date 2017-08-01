const path = require('path');
const assert = require('assert');
const { inspect } = require('util');

const FILE_PATH = 'src/common/components';

/**
 * Helper to build definitions for modules 
 * whose default symbol is re-expored using module name
 */
const modulesThatExportDefault = (modules) =>
  modules.map(module => ({
    type: 'default',
    oldName: module,
    module
  }));

/**
 * Helper to build definitions for modules
 * whose symbols where re-exported using the same names
 */
const moduleDefinitions = (module, exportedSymbols) =>
  exportedSymbols.map(symbol => ({
    type: 'keyword',
    oldName: symbol,
    module
  }));

const DEFINITIONS = [
  { type: 'default', oldName: 'withConfirmation', module: 'Confirmation' },
]
  .concat(modulesThatExportDefault([
    'IconRadioButtons',
    'Slider',
    'Dropdown',
    'CustomDropdown',
    'InfoTooltip',
    'FontDropdown',
    'FontSizeDropdown',
    'TextAlignments',
    'PreviewToggle'
  ]))
  .concat(moduleDefinitions('Helpers', ['Show', 'Hide', 'Unfold', 'Label']))
  .concat(moduleDefinitions('HelpBlock', ['HelpBlock']))
  .concat(moduleDefinitions('CheckboxRadio', ['Checkbox', 'Radio']))
  .concat(moduleDefinitions('Scaffold', [
    'SidebarPanelTitle',
    'SidebarSection',
    'SubGroup',
    'SubGroupActions',
    'Field',
    'FieldGroup',
    'IconField'
  ]))
  .concat(moduleDefinitions('IconButton', [
    'IconButton',
    'Bold',
    'Italic',
    'Underline',
    'Align'
  ]))
  .concat(moduleDefinitions('Inputs', [
    'TextAreaField',
    'Toggle'
  ]))
  .concat(moduleDefinitions('SidebarGrid', [
    'Row',
    'Col'
  ]));


export const parser = 'flow';

export default (fileInfo, api) => {
  const j = api.jscodeshift;

  class ImportsRewriter {

    constructor(definitionsList, pathRewrite = (old, moduleName) => moduleName) {
      this.definitions = this._buildDefinitionsMap(definitionsList);
      this.pathRewrite = pathRewrite;
    }

    _buildDefinitionsMap(defList) {
      const defMap = {};
      defList.forEach(d => {
        assert(
          ['default', 'keyword'].includes(d.type) &&
          typeof d.module === 'string' &&
          typeof d.oldName === 'string',
          `invalid definition: ${inspect(d)}`
        )
        defMap[d.oldName] = d;
      });
      return defMap;
    }

    rewrite(path) {
      const rewrites = {};

      const importsSpecifers = path.node.specifiers.filter(s => s.type === 'ImportSpecifier');
      assert(importsSpecifers.length === path.node.specifiers.length, `Can\'t migrate`);

      importsSpecifers.forEach(s => {
        const importedSymbol = s.imported.name;
        if (importedSymbol in this.definitions) {
          const definition = this.definitions[importedSymbol];
          rewrites[definition.module] = rewrites[definition.module] || [];
          rewrites[definition.module].push(this._rewriteSpecifier(s, definition))
        } else {
          throw new Error(`unkown imported symbol: '${importedSymbol}', can\'t migrate`);
        }
      });

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
          return j.importDefaultSpecifier(specifier.local)
        case 'keyword':
          return specifier;
          break;
        default:
          throw new Error(`invalid definition type: ${definition.type}`);
      }
    }
  }

  const importsRewriter = new ImportsRewriter(
    DEFINITIONS,
    (importPath, moduleName) => `${importPath}/${moduleName}`
  );

  const moduleRelativePath = path.relative(path.dirname(fileInfo.path), FILE_PATH);
  const root = j(fileInfo.source);
  return root
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal',
        value: moduleRelativePath,
      },
    })
    .forEach(path => importsRewriter.rewrite(path))
    .toSource({ quote: 'single' });
};

