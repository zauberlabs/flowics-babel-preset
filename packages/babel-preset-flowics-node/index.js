module.exports = {
  plugins: [
    require('babel-plugin-transform-es2015-modules-commonjs'),

    // Flow Support
    require('babel-plugin-transform-flow-strip-types'),

    // ES7+ Support
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-syntax-async-functions'),
    [require('babel-plugin-transform-async-to-module-method'), {
      "module": "bluebird",
      "method": "coroutine"
    }],
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties')
  ],

};
