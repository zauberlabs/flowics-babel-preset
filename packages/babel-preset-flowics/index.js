module.exports.default = function(context, opts = {}) {

  // es2015 default modules options
  const modules = opts.modules || 'commonjs';

  return {
    presets: [
      ['es2015', { modules }],
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
