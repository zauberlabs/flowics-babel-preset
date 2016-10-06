module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-react'),
  ],
  plugins: [
    // Flow Support
    require('babel-plugin-transform-flow-strip-types'),

    // sandbox polyfills, use babel runtine on apps
    [require('babel-plugin-transform-runtime'), {"polyfill": true, "regenerator": true }],

    // ES7+ Support
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-syntax-async-functions'),
    [require('babel-plugin-transform-async-to-module-method'), {
      "module": "bluebird",
      "method": "coroutine"
    }],
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties'),
  ],
};
