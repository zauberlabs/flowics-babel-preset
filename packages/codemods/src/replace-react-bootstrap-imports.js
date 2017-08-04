const { modulesThatExportDefault, ImportsRewriter } = require('./utils/import-rewriter');

const DEFINITIONS = modulesThatExportDefault([
  'Accordion',
  'Alert',
  'Badge',
  'Breadcrumb',
  'BreadcrumbItem',
  'Button',
  'ButtonGroup',
  'ButtonToolbar',
  'Carousel',
  'CarouselItem',
  'Checkbox',
  'Clearfix',
  'CloseButton',
  'ControlLabel',
  'Col',
  'Collapse',
  'Dropdown',
  'DropdownButton',
  'Fade',
  'Form',
  'FormControl',
  'FormGroup',
  'Glyphicon',
  'Grid',
  'HelpBlock',
  'Image',
  'InputGroup',
  'Jumbotron',
  'Label',
  'ListGroup',
  'ListGroupItem',
  'Media',
  'MenuItem',
  'Modal',
  'ModalBody',
  'ModalFooter',
  'ModalHeader',
  'ModalTitle',
  'Nav',
  'Navbar',
  'NavbarBrand',
  'NavDropdown',
  'NavItem',
  'Overlay',
  'OverlayTrigger',
  'PageHeader',
  'PageItem',
  'Pager',
  'Pagination',
  'PaginationButton',
  'Panel',
  'PanelGroup',
  'Popover',
  'ProgressBar',
  'Radio',
  'ResponsiveEmbed',
  'Row',
  'SafeAnchor',
  'SplitButton',
  'Tab',
  'TabContainer',
  'TabContent',
  'Table',
  'TabPane',
  'Tabs',
  'Thumbnail',
  'ToggleButton',
  'ToggleButtonGroup',
  'Tooltip',
  'Well'
]);

export const parser = 'flow';

export default (fileInfo, api) => {
  const j = api.jscodeshift;

  const importsRewriter = new ImportsRewriter(DEFINITIONS, (_, moduleName) => `react-bootstrap/lib/${moduleName}`);

  const root = j(fileInfo.source);
  return root
    .find(j.ImportDeclaration, {
      source: {
        type: 'Literal',
        value: 'react-bootstrap',
      },
    })
    .forEach(path => importsRewriter.rewrite(path))
    .toSource({ quote: 'single' });
};

