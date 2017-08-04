jest.autoMockOff();
const {defineTest, defineInlineTest, runInlineTest } = require('jscodeshift/dist/testUtils');


defineTest(__dirname, 'remove-duplicate-imports');

const transformer = require('../remove-duplicate-imports');

defineInlineTest(transformer, {},
  `
// default imports MUST go first
import { createInitialState } from './duck';
import rootReducer from './duck';
`,
  `
// default imports MUST go first
import rootReducer, { createInitialState } from './duck';
`);
