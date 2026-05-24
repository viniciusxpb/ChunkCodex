# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project

ChunkCodex is an Angular 21 single-page app, aimed at being a modded-Minecraft wiki/companion (see [pending-ideas.md](pending-ideas.md) for product direction: QR desktop→mobile bridge, recursive build calculator, offline-first SW, "what can I craft with this inventory" search). The codebase is currently in the **design-system bootstrap phase** — the root [app.html](src/app/app.html) is a showcase page for the `chunk-*` UI primitives, not a real route tree. `app.routes.ts` is empty.

## Commands

| Task | Command |
| --- | --- |
| Dev server (`http://localhost:4200`) | `npm start` (= `ng serve`) |
| Production build → `dist/` | `npm run build` |
| Dev watch build | `npm run watch` |
| Run unit tests (Vitest) | `npm test` (= `ng test`) |
| Scaffold a component | `ng generate component shared/ui/chunk-foo --type=component` |

**Tests use Vitest, not Karma/Jasmine.** Test runner is wired via `@angular/build:unit-test` in [angular.json](angular.json). `describe / it / expect` are globals (configured in [tsconfig.spec.json](tsconfig.spec.json) via `"types": ["vitest/globals"]`). To run a single file: `npx vitest run src/app/shared/ui/chunk-button/chunk-button.component.spec.ts`.

## Architecture

### Component conventions (`src/app/shared/ui/chunk-*`)

Every primitive in `src/app/shared/ui/` follows the same shape, and **new components should match it** rather than reverting to older Angular patterns:

- **Standalone, no NgModules.** `imports: []` on the decorator; injected directly into the consuming component's `imports`.
- **Signal-based inputs only** — `readonly foo = input<Type>('default')`, no `@Input()` decorators. Booleans use `input(false, { transform: booleanAttribute })`.
- **No template logic for variants.** Static option props (`variant`, `tone`, `size`, `padding`, `disabled`) are reflected as `data-*` attributes via the component's `host:` block, and SCSS styles them with `:host([data-tone='lapis'])` selectors. Templates are typically just `<ng-content />`.
- **CSS custom properties for theming.** Each component declares `--chunk-X-*` CSS vars in `:host { ... }`, and `:host([data-*])` selectors override those vars. Don't restate full property blocks per variant — only flip the relevant vars. See [chunk-button.component.scss](src/app/shared/ui/chunk-button/chunk-button.component.scss) as the reference pattern.
- **Selector prefix is `chunk-`**, not the project's `app` prefix from `angular.json`. The `app` prefix is only used by `app-root`.

### Compound components & barrel `*.imports.ts`

Components that ship as a family (`chunk-panel` + `chunk-panel-title` + `chunk-panel-content`, `chunk-input` + `chunk-input-title` + `chunk-input-field` + `chunk-input-hint`) live in subdirectories under the parent and are re-exported through a sibling `<parent>.imports.ts`. Consumers register the whole family with one entry:

```ts
import { CHUNK_PANEL_IMPORTS } from './shared/ui/chunk-panel/chunk-panel.imports';

@Component({ imports: [CHUNK_PANEL_IMPORTS, ...] })
```

When adding a new sub-component to an existing family, update the family's `*.imports.ts` (both the `export *` lines and the `CHUNK_X_IMPORTS` array).

### Design tokens (`src/styles/tokens/`)

SCSS tokens live in [src/styles/tokens/](src/styles/tokens/) and are exposed via `@use 'tokens' as *;` thanks to `stylePreprocessorOptions.includePaths: ["src/styles"]` in [angular.json](angular.json) — **never** use long relative paths like `../../../styles/tokens`.

- [`_colors.scss`](src/styles/tokens/_colors.scss) — Minecraft-themed palette (`grass`, `lapis`, `diamond`, `redstone`, `dirt`, `xp`, `ink-*`, `bg-*`) plus semantic aliases (`$chunk-color-success`, `$chunk-color-danger`, etc.).
- [`_effects.scss`](src/styles/tokens/_effects.scss) — `$chunk-shadow-{sm,md,lg}` are **solid offset shadows with zero blur** (`2px 2px 0 $shadow`), and `$chunk-padding-{sm,md,lg}` are `14/22/32px`. Borders are 3px solid. This is intentional — the visual language is "stacked plastic block," so don't introduce blurred shadows or rounded corners without checking [app.html](src/app/app.html) for tone.
- [`_typography.scss`](src/styles/tokens/_typography.scss) — `Space Grotesk` (sans) / `JetBrains Mono` (mono). `VT323` is loaded but unused so far. Fonts come from `@fontsource/*` packages, registered in `angular.json` styles array.

### Bootstrap & global styles

- [main.ts](src/main.ts) → `bootstrapApplication(App, appConfig)`. No `AppModule`.
- Global CSS reset is `the-new-css-reset`, registered in `angular.json` (not imported in SCSS). `styles.scss` only sets body bg/text/font.

## TypeScript strictness

`tsconfig.json` enables `strict`, `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, and `strictTemplates`. `noPropertyAccessFromIndexSignature` in particular means index-signature props must use `obj['key']` rather than `obj.key`. Don't disable these to silence errors.

## Formatting

Prettier: `printWidth: 100`, `singleQuote: true`. HTML uses the `angular` parser ([.prettierrc](.prettierrc)). Indentation per [.editorconfig](.editorconfig).

## Notes when working here

- Spec files generated alongside new components currently just contain a smoke `expect(true).toBe(true)` — when you add real behavior to a component, replace that placeholder rather than appending to it.
- Strings in templates and `pending-ideas.md` are in Portuguese. Component code, identifiers, and types are English. Match this split when adding new content.
