
export const parser = 'flow';

function removeDuplicateImportOfKind(j, root, importKind) {
  const importsByLocation = root
    .find(j.ImportDeclaration, { importKind })
    .paths()
    .filter(i => i.node.specifiers.map(s => s.type).indexOf('ImportNamespaceSpecifier') === -1)
    .reduce((groups, i) => {
      const location = i.node.source.value;
      return groups.set(location,
        groups.has(location) ?
          groups.get(location).concat([i]) :
          [i]
      );
    }, new Map());

  importsByLocation.forEach(ims => {
    if (ims.length > 1) {
      const theImport = ims[0]; // the import that we will keep

      // for each other import, just take the specifiers and add them to the first import
      // and remove the import
      for (let i = 1; i < ims.length; i++) {
        ims[i].node.specifiers.forEach(s => {
          if (s.type === 'ImportDefaultSpecifier') {
            theImport.node.specifiers.unshift(s);
          } else {
            theImport.node.specifiers.push(s);
          }
        });
        ims[i].prune();
      }
    }
  });
}


export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  removeDuplicateImportOfKind(j, root, 'value');
  removeDuplicateImportOfKind(j, root, 'type');

  return root.toSource();
}
