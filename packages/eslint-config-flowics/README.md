eslint-config-flowics
==================================

Common coding conventions for ensuring consistent style across **Flowics** JavaScript projects

# To publish a new version

Run

```
npm publish
```

And answer the questions!


# Installation

Install *eslint*, the config, and the required plugins

```
npm i --save-dev eslint babel-eslint eslint-config-flowics eslint-plugin-react eslint-plugin-promise
```

# Usage

`eslint-config-flowics` exports 4 different configurations:
- `backend` (default)
- `frontend`
- `tests`
- `commons` (extended by all previous three)

The common use case (for a project with server, client and development code) would be to create
a `.eslintrc` file in the project's root folder and include the following line in it:
```
extends: flowics
```

This will enforce a backend coding style by default.

- To allow proper linting of client code:
  1. Create a `.eslintrc` in client code directory
  2. Include the following snippet inside it:
  ```YAML
    env:
      browser: true
      node: false
  ```

- To allow proper linting of test code:
  1. Create a `.eslintrc` in test code directory
  2. Include the following snippet inside it:
  ```YAML
    env:
      mocha: true
  ```

> NOTE: `frontend` and `tests` configuration are recommended only for more specific use cases, like a pure frontend project.

## backend (default)

Sets environment `node` to `true`.
```
extends: flowics
```

## frontend

Sets environment `browser` to `true`
```
extends: flowics/lib/frontend
```

## tests

Extends from `backend` and sets environment `mocha` to `true`
```
extends: flowics/lib/tests
```

## commons

No environment assumption is made.
```
extends: flowics/lib/commons
```
