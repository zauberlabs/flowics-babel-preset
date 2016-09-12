module.exports = {
  plugins: [
    require('babel-plugin-transform-es2015-function-name'),
    require('babel-plugin-transform-es2015-sticky-regex'),
    require('babel-plugin-transform-es2015-unicode-regex'),
    require('babel-plugin-transform-es2015-spread'),
    require('babel-plugin-transform-es2015-parameters'),
    require('babel-plugin-transform-es2015-destructuring'),
    require('babel-plugin-transform-es2015-shorthand-properties'),
    require('babel-plugin-transform-es2015-modules-commonjs'),

    // Required for use of generators & async functions
    require('babel-plugin-transform-es2015-arrow-functions'),
    require('babel-plugin-transform-regenerator'),

    // ES7+ Support
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties')
  ],

};
