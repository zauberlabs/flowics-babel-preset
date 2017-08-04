const { moduleDefinitions, modulesThatExportDefault, ImportsRewriter } = require('./utils/import-rewriter');

const DEFINITIONS = [
  { type: 'default', oldName: 'withConfirmation', module: 'Confirmation'  },
]
  .concat(modulesThatExportDefault([
    'Alert',
    'DynamicSizeText',
    'EditableText',
    'EmptyMessage',
    'FAIcon',
    'InfoTooltip',
    'Input',
    'Loader',
    'MediaTiles',
    'Mention',
    'MentionModalWithControls',
    'NetworkError',
    'PageHeader',
    'Panel',
    'Select',
    'SourceIndicator',
    'StatusIndicator',
    'Switch',
    'TextArea',
    'Tooltip',
    'VideoLoader',
    'TwitterIntent',
    'KBLink'
  ]))
  .concat(moduleDefinitions('KBLink', ['KBDropdown']))
  .concat(moduleDefinitions('AppLayout', ['AppLayout', 'AppNav', 'AppContent']))
  .concat(moduleDefinitions('Breadcrumb', ['Breadcrumb', 'BreadcrumbItem']))
  .concat(moduleDefinitions('Button', ['Button', 'ButtonGroup', 'ButtonCounter']))
  .concat(moduleDefinitions('CheckboxRadio', ['Checkbox', 'Radio']))
  .concat(moduleDefinitions('Dropdown', ['DropdownToggle', 'Dropdown', 'DropdownItem', 'GenericDropdownItem', 'DropdownDivider', 'DropdownGroup']))
  .concat(moduleDefinitions('Grid', ['Container', 'Row', 'Col']))
  .concat(moduleDefinitions('Icon', ['Icon', 'UIIcon']))
  .concat(moduleDefinitions('ImageLoader', ['ImageFetcher', 'ImageLoader', 'DivImageLoader']))
  .concat(moduleDefinitions('ListItem', ['ListItem', 'ListItemActions']))
  .concat(moduleDefinitions('Modal', ['Modal', 'ModalHeader', 'ModalBody', 'ModalFooter']))
  .concat(moduleDefinitions('Popover', ['PopoverToggle', 'Popover', 'PopoverTitle', 'PopoverBody']))
  .concat(moduleDefinitions('Topbar', ['Topbar', 'ContextProvider']))
  .concat(moduleDefinitions('BrowserInfo', ['getUserAgent', 'isTouch']))
  .concat(moduleDefinitions('BrowserPopup', ['centeredPopup']));

export const parser = 'flow';

export default (fileInfo, api) => {
  const j = api.jscodeshift;

  const importsRewriter = new ImportsRewriter(DEFINITIONS, (_, moduleName) => `flui/lib/${moduleName}`);

  const root = j(fileInfo.source);
  return root
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal',
        value: 'flui',
      },
    })
    .forEach(path => importsRewriter.rewrite(path))
    .toSource({ quote: 'single' });
};

