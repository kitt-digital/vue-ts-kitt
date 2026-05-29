# Vue 3 / TypeScript 6 library for UI components / modules

Another Vue 3 component / module library that includes TypeScript 6 and is bundled by Vite.

## Install

```shell
npm i -D vue-ts-kitt
```
```shell
pnpm i -D vue-ts-kitt
```
```shell
yarn add -D vue-ts-kitt
```

## Docs

All components / modules are documented in Storybook.

```shell
npm exec vue-ts-docs
```
```shell
pnpm exec vue-ts-docs
```
```shell
yarn exec vue-ts-docs
```

## Usage

This example shows how to import a single component of the library.
```vue
<template>
  <div>
    my project + vue-ts-kitt
    <Button :html-attributes="{ name: 'my-button' }" :text="'Button'" />
  </div>
</template>

<script setup lang="ts">
import { Button } from 'vue-ts-kitt';
</script>

<style lang="scss">
@use 'vue-ts-kitt/vars.css';
@use 'vue-ts-kitt/Button/style.css';
</style>
```

Note: If you import multiple component CSS files in multiple Vue files, it is recomanded to import the styles globally.
```css
/* main.scss file */
@use 'vue-ts-kitt/vars.css';
@use 'vue-ts-kitt/Button/style.css';
@use 'vue-ts-kitt/Link/style.css';
```

The library includes the [Mukta font (Google fonts)](https://fonts.google.com/specimen/Mukta). If you want to use it, please import the font-face.css file as follows:
```css
@use 'vue-ts-kitt/font-face.css';
```

## Global imports

Import all styles in your main style file (incl. Mukta font).
```css
/* main.scss file */
@use 'vue-ts-kitt/style.css';
```

Register all components/modules globally in your main JS/TS file
```js
// main.ts file
import { createApp } from 'vue';
import App from './App.vue';

import * as kitt from 'vue-ts-kitt';
const app = createApp(App);
for (const [name, comp] of Object.entries(kitt)) {
  app.component(name, comp);
}

app.mount('#app');
```
Afterwards, you don't have to import each component in each SFC file.

# Working in the library

All components / modules are documented in Storybook.
```shell
pnpm storybook
```

## Git Hooks

It is necessary to set the custom hook directory after each clone. To do so, you need to call the following command.
```shell
git config core.hooksPath .hooks
```
Afterwards, the `commit-msg` hook inside the `./.hooks` directory will `lint` your `commit messages`.

## Bin command

After cloning the library create the output with `pnpm build` and `pnpm build-storybook`. Call `npm link` to create a symlink to the `bin/vue-ts-docs.js` file and try to call the following script to open the docs via the bin file.
```shell
vue-ts-docs
```

### Troubleshoot

If something went wrong, e.g. you get a permission denied error or anything else, just delete the `node_modules` directory or the symlink directory / file in the global folders (e.g. `~/.npm/_npx` or `~/.nvm/versions/node/v24.14.1/bin`) and call the `npm link` command again. It solves very often the issue.

Or add the following script to the scripts section in the `package.json` file.
```json
{
  "scripts": {
    "docs": "node bin/vue-ts-docs.js"
  }
}
```

## Semantic Release
It is used to automate the package release workflow by your commit messages.
```text
<type>(<scope>): (<symbol>) <short summary>

(<body>)
detailed information about your changes
(</body>)
```
<sub>Note: The usage of `<scope>`, `<symbol>` and `<body>` is optional.</sub>

The format of your commit message must match the following rules to make it interpretable for Semantic Release.
| Commit message `<types>` | Value | Description |
| :--- | - | :--- |
| `minor(components): + button, input and link` | minor | Multiple changes for a minor update |
| `feat(components): + button with icons` | minor | For an edited or new feature |
| `patch(components): ~ label [for] attribute type` | patch | Small changes for a patch update |
| `fix(components): ~ button icon.url property` | patch | Bugfixes / Hotfixes / Coldfixes |
| `style(components): - button bg-color` | patch | For specific styles / CSS changes |
| `test(components): ~ button bg-color` | false | Ignored by semantic release, to create test cases |

<sub>Note: It is not necessary to define a scope. You can write each `commit message type` also without a scope (`fix: ~ button icon property`).</sub>

| Commit message `<scopes>` | Value | Description |
| :--- | - | :--- |
| `fix(no-release): - button bg-color` | false | Ignored by semantic release, to create test cases |
| `feat(breaking): + button icon.image property` | major | Use this scope for a breacking change |

<sub>Note: It is not required to write scopes. The values major, minor and patch defines the version as follows: v1.1.1 === v(`major`).(`minor`).(`patch`)</sub>

| `<symbols>` | Description |
| :---: | :--- |
| + | added |
| - | removed |
| ~ | edited |

<sub>Note: It is optional, to use this `helper symbols` to shorten your commit message.</sub>

### Push major releases
It is only possible to push a `major release` with the following options. Use the scope `breaking` and/or describe your breaking change underneath the following subheads `BREAKING CHANGE:` or `BREAKING CHANGES:` in the `<body>` of your commit message. Combine this with each minor or patch update.

<sub>Note: It is recommended to include `[skip ci]` in the commit message if you won't trigger a new release.</sub>

