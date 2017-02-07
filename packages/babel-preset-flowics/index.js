import es2015 from 'babel-preset-es2015';
import react from 'babel-preset-react';
import flowStripTypes from 'babel-plugin-transform-flow-strip-types';
import runtime from 'babel-plugin-transform-runtime';
import exponentiationOperator from 'babel-plugin-transform-exponentiation-operator';
import asyncFunctions from 'babel-plugin-syntax-async-functions';
import asyncToModule from 'babel-plugin-transform-async-to-module-method';
import objectRestSpread from 'babel-plugin-transform-object-rest-spread';
import classProperties from 'babel-plugin-transform-class-properties';

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
