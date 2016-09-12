module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-react'),
  ],
  plugins: [
    // sandbox polyfills, use babel runtine on apps
    [require('babel-plugin-transform-runtime'), {"polyfill": true, "regenerator": true }],
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties'),
  ],
};
