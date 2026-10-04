# Extension Template

[![Marketplace](https://img.shields.io/badge/Marketplace-Extension%20Template-007ACC?logo=visualstudiocode&logoColor=white)](https://marketplace.visualstudio.com/items?itemName=jenesei-software.extension-template)
[![Version](https://img.shields.io/badge/version-0.0.1-2ea44f)](CHANGELOG.md)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-2ea44f)](package.json)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A starting point for jenesei-software VS Code extensions. It ships the whole
toolchain already wired up - activity bar views, commands, settings,
localization, unit and integration tests, CI and release - so a new extension
starts from a working, consistent base.

## What is inside

- **Activity bar container** with a webview **Panel** and a native **Items**
  tree.
- **Commands** with a `view/title` menu, an output channel and a status bar item.
- **Settings** read through a single `config.ts` (`CONFIG_SECTION` + `KEYS`).
- **Localization**: `package.nls.json` plus an `l10n/bundle.l10n.json` base for
  `vscode.l10n.t(...)`.
- **Tests**: `node:test` unit tests and `@vscode/test-cli` integration tests.
- **Tooling**: Biome, esbuild, strict TypeScript, a registry guard and GitHub
  Actions for CI and release.

## Using this template

Create a new repository from this template, then replace the placeholders
everywhere (`grep` is your friend):

| Placeholder | Replace with |
| --- | --- |
| `extension-template` | the package / repository name, e.g. `my-feature` |
| `Extension Template` | the display name, e.g. `My Feature` |
| `extensionTemplate` | the command / view / config id prefix, e.g. `myFeature` |
| `jenesei-software.extension-template` | the full extension id, e.g. `jenesei-software.my-feature` |

Then:

1. Update `description`, `keywords` and `repository` in `package.json`.
2. Reset `CHANGELOG.md` (keep `## [Unreleased]`) and the README.
3. Replace `resources/icon.svg` and `resources/icon.png` with your own icon.
4. `npm install` and start building.

Keep the version badge in the README (`badge/version-X.Y.Z-`): the release
workflow rewrites it on every release.

## Getting started

1. `npm install`
2. `npm run build` (or press F5 to launch the Extension Development Host)
3. `npm run check` and `npm test` before committing

## Commands

| Command | Description |
| --- | --- |
| `Extension Template: Refresh` | Re-run the example service. |
| `Extension Template: Say Hello` | Show an example notification. |
| `Extension Template: Open Settings` | Open this extension's settings. |

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run build` / `build:watch` / `build:prod` | Bundle with esbuild. |
| `npm run check` | Lint, typecheck and registry guard. |
| `npm test` | Unit tests (`node:test`). |
| `npm run test:integration` | Integration tests in VS Code. |
| `npm run vsix` / `vsix:publish` | Package / publish the extension. |

## Support the project

Extension Template is free and open source. If it is useful to you:

- ⭐ **Star the repository on [GitHub](https://github.com/jenesei-software/jenesei-template-vscode-extension)** — it helps other people find it.
- ☕ **[DonationAlerts](https://www.donationalerts.com/r/cyrilstrone)** — a one-time donation keeps the project alive.

## License

[MIT](LICENSE)
