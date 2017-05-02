function preset(context, opts = {}) {

  // es2015 default modules options
  var modules = opts.es6 ? false : 'commonjs';

  return {
    presets: [
      ['es2015', { modules: modules }],
      'react'
    ],
    plugins: [
      // Flow Support
      'transform-flow-strip-types',

      // sandbox polyfills, use babel runtine on apps
      ['transform-runtime', {
        polyfill: true,
        regenerator: true
      }],

      // ES7+ Support
      'transform-exponentiation-operator',
      'syntax-async-functions',
      ['transform-async-to-module-method', {
        "module": "bluebird",
        "method": "coroutine"
      }],
      'transform-object-rest-spread',
      'transform-class-properties',
    ],
  };
}

var oldConfig = preset({});

exports.default = oldConfig;

Object.defineProperty(oldConfig, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset
});

module.exports = exports["default"];

