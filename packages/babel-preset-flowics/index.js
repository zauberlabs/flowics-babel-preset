const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');
const flowStripTypes = require('babel-plugin-transform-flow-strip-types');
const runtime = require('babel-plugin-transform-runtime');
const exponentiationOperator = require('babel-plugin-transform-exponentiation-operator');
const asyncFunctions = require('babel-plugin-syntax-async-functions');
const asyncToModule = require('babel-plugin-transform-async-to-module-method');
const objectRestSpread = require('babel-plugin-transform-object-rest-spread');
const classProperties = require('babel-plugin-transform-class-properties');

module.exports = {
  presets: [
    [es2015, {
      modules: false
    }],
    react
  ],
  plugins: [
    // Flow Support
    flowStripTypes,

    // sandbox polyfills, use babel runtine on apps
    [runtime, {
      polyfill: true,
      regenerator: true
    }],

    // ES7+ Support
    exponentiationOperator,
    asyncFunctions,
    [asyncToModule, {
      module: "bluebird",
      method: "coroutine"
    }],
    objectRestSpread,
    classProperties,
  ],
};
