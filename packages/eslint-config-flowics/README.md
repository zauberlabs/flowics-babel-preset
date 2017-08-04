
#eslint-config-flowics

Common coding conventions for ensuring consistent style across **Flowics** JavaScript projects

## Usage

`eslint-config-flowics` exports several configuration, that can be combined with each other:

- `lib/base`: Rules only from eslint (no plugins). Several style rules & best practices 
- `lib/promises`: requires `eslint-plugin-promise` plugin. Promises checks & best practices
- `lib/react`: requires `eslint-plugin-react` plugin. React checks & best practices
- `lib/flowtype`: requires `eslint-plugin-flowtype` plugin. Flowtype checks & best practices
- `lib/imports`: requires `eslint-plugin-import` plugin. Checks imports. Allows to detect 
  if you are importing a symbol that is no exported in the source module. USE IT!
- `lib/tests`: Use it to override `lib/base` to loosen up some rules in tests, and enable env jest & mocha.

To use them, just configure your `.eslintrc.json` as:

```js
{
  "parser": "babel-eslint",
  "extends": [
    "flowics/lib/base",
    "flowics/lib/promises",
    "flowics/lib/react",
    "flowics/lib/flowtype",
    "flowics/lib/imports",
    "flowics/lib/tests",
  ]
}
```

Just combine the ones you are interested in.

### Old Usage

The old way of using this config is still available (for now), but not recommend.

You have a few *presets* that include several of the mentioned configs.

- `lib/frontend`: Composes `base`,`promises`,`flowtype`,`imports`,`react` & adds `env: browser`
- `lib/backend`: Composes `base`,`promises`,`flowtype`,`imports`,`react` & adds `env: node`

Don't use them, it's better to compose the config on your own, so you only add the *traits* your project uses. (maybe you are not using flowtype or react, or don't care about promises rules)


## Installation

Install *eslint*, the config, and the required plugins

```
yarn add --dev eslint babel-eslint eslint-config-flowics
```

Optionally, if you use the `imports` config, also do:
```
yarn add --dev eslint-plugin-import
```

Optionally, if you use the `react` config, also do:
```
yarn add --dev eslint-plugin-react
```

Optionally, if you use the `promise` config, also do:
```
yarn add --dev eslint-plugin-promise
```

Optionally, if you use the `flowtype` config, also do:
```
yarn add --dev eslint-plugin-flowtype
```

## To publish a new version

Run

```
npm publish
```

And answer the questions!


