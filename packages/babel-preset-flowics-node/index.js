module.exports = {
  plugins: [
    require('babel-plugin-transform-es2015-modules-commonjs'),

    // ES7+ Support
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-async-to-module-method'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties')
  ],

};
