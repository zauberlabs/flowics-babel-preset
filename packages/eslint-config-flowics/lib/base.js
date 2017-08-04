module.exports = {
  "extends": "eslint:recommended",

  "env": {
    "es6": true
  },

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  "rules": {
    // -----------------------------------------------------------------------------------
    // Possible Errors
    // -----------------------------------------------------------------------------------

    // Most of there rules are defined in eslint:recommended

    "no-console": "warn", // overrides eslint:recommend

    // -----------------------------------------------------------------------------------
    // Best Practices
    // -----------------------------------------------------------------------------------

    "array-callback-return": "error",
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "off",
    "eqeqeq": ["error", "smart"],
    "guard-for-in": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "warn",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-labels": "error",
    "no-loop-func": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "no-with": "error",

    // -----------------------------------------------------------------------------------
    // Strict Mode
    // -----------------------------------------------------------------------------------
    "strict": ["error", "global"],
  
    // -----------------------------------------------------------------------------------
    // Variables
    // -----------------------------------------------------------------------------------
    "no-shadow": "error",
    "no-undef": "error",
    "no-unused-vars": ["error",
      { "argsIgnorePattern": "__" }
    ],
    "no-use-before-define": ["error", "nofunc"],

    // -----------------------------------------------------------------------------------
    // Node.js and CommonJS
    // -----------------------------------------------------------------------------------
    "callback-return": "error",
    "global-require": "off",
    "handle-callback-err": "warn",
    "no-new-require": "error",
    "no-path-concat": "warn",
    "no-process-env": "warn",

    // -----------------------------------------------------------------------------------
    // Stylistic Issues
    // -----------------------------------------------------------------------------------
    "array-bracket-spacing": ["error", "never",
      {
        "singleValue": false,
        "arraysInArrays": true,
        "objectsInArrays": false
      }
    ],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true } ],
    "camelcase": ["error", { "properties": "always" } ],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    "consistent-this": ["error", "self"],
    "eol-last": "error",
    "func-names": "off",
    "func-style": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "max-nested-callbacks": ["error", 3],
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
    "new-parens": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": [1, { "max": 2 }],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "operator-linebreak": ["error", "after"],
    "quotes": "off",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": ["error",
      {
        "functions": "always",
        "keywords": "always"
      }
    ],
    "space-before-function-paren": ["error",
      {
        "anonymous": "never",
        "named": "never"
      }
    ],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": [1,
      {
        "words": true,
        "nonwords": false
      }],

    // -----------------------------------------------------------------------------------
    // ECMAScript 6
    // -----------------------------------------------------------------------------------
    "arrow-spacing": "error",
    "no-duplicate-imports": "off", // doesn't support 'import type' use import/no-duplicate
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-template": "warn"
  }
}


