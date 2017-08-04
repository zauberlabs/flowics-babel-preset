module.exports = {
  extends: "flowics/lib/base",
  env: {
    node: true
  },
  overrides: {
    files: ['src/__tests__/*.js'],
    env: {
      jest: true
    }
  }
};
