const path = require('path');
const { moduleDefinitions, modulesThatExportDefault, ImportsRewriter } = require('./utils/import-rewriter');

const FILE_PATH = 'src/common/components';

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
    .forEach(p => importsRewriter.rewrite(p))
    .toSource({ quote: 'single' });
};

