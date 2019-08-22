This project was bootstrapped with [Create React App + TypeScript](https://create-react-app.dev/docs/adding-typescript).

It's a reduced test case to try out new [Storybook Docs](https://medium.com/storybookjs/component-story-format-66f4c32366df) with a simple `<TextButton>` component.

It also incorporates a barebones custom Sass framework that I use in all my React projects, and other tooling (e.g. PostCSS, code linters, etc).

## WIP
- Get `@storybook/preset-typescript` working, so docs page shows typed props. This will replace functionality of `info` addon, which used to display a props table in non-TypeScript projects, but fails to do so in TypeScript projects.
- Incorporate Markdown directly in story and render in docs. This will make `readme` addon redundant.
