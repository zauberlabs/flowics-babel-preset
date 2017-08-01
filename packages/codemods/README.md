
## How to run a codemod

Install jscodeshift: `npm i -g jscodeshift`.

Do:
```
  jscodeshift -t ./src/replace-components-imports.js <path-to-your-project-src-dir>
```

## Available Codemods

 * `replace-components-imports.js`: For vizbuilder. replace /common/components/index.js for a specific import
 * `replace-flui-imports.js`: Migrate imports to `flui` to `flui/lib/<Component>`.
