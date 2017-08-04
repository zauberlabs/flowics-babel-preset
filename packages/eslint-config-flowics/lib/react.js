module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    "react/jsx-no-bind": "warn",
    "react/display-name": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "warn",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "error",
    "react/no-string-refs": "warn",
    "react/prop-types": "warn"    
  }
}