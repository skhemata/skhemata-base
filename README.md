# \<skhemata-base>

Skhemata Base Web Component. This web component is base component which provides common functionality for other components.

## Installation
```bash
npm i @skhemata/skhemata-base
```

## Usage
```html
<script type="module">
  import '@skhemata/skhemata-base/skhemata-base.js';
</script>

<skhemata-base></skhemata-base>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## License
​
Skhemata Base is distributed under [Commercial Skhemata Licence Agreement v1](https://www.skhemata.com/license/csla-1.0) (CSLA-1.0). For license terms, see LICENSE file