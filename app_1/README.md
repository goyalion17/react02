# app_1

A small React starter app, migrated from the legacy Create React App (CRA) setup to a modern Vite-based stack.

## Stack

| Area     | Tool                                  |
| -------- | ------------------------------------- |
| Build    | Vite 8                                |
| UI       | React 19 (`createRoot`, `StrictMode`) |
| Lint     | ESLint 9 (flat config)                |
| Format   | Prettier 3                            |
| Tests    | Vitest 4 + Testing Library            |
| Test env | jsdom                                 |

## Security

`npm audit` reports **0 vulnerabilities** (down from **223** in the original CRA `react-scripts@3.2.0` stack — 21 critical, 65 high, 128 moderate, 9 low). All of those came from transitive build-tool dependencies that no longer exist after the move to Vite.

## Requirements

- Node.js >= 20
- npm >= 10

## Quick start

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Script                 | What it does                          |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Start the Vite dev server (port 3000) |
| `npm run build`        | Production build into `dist/`         |
| `npm run preview`      | Preview the production build locally  |
| `npm run lint`         | Run ESLint                            |
| `npm run lint:fix`     | Run ESLint with autofix               |
| `npm run format`       | Format all files with Prettier        |
| `npm run format:check` | Check formatting without writing      |
| `npm run test`         | Run Vitest in watch mode              |
| `npm run test:run`     | Run the test suite once               |
| `npm run test:ui`      | Run Vitest with the UI                |
| `npm run coverage`     | Run tests with coverage               |

## Project structure

```
app_1/
├── index.html              # Vite entry HTML (project root)
├── vite.config.js          # Vite + Vitest config
├── eslint.config.js        # ESLint 9 flat config
├── .prettierrc.json        # Prettier config
├── public/                 # Static assets (favicon, manifest, icons)
└── src/
    ├── main.jsx            # App entry (createRoot + StrictMode)
    ├── App.jsx             # Root component
    ├── App.css
    ├── index.css
    ├── logo.svg
    ├── App.test.jsx        # Component tests
    └── test/
        └── setup.js        # Testing Library / jest-dom setup
```

## Testing

Tests use Vitest with React Testing Library and `@testing-library/jest-dom` matchers, running in a jsdom environment. The setup file (`src/test/setup.js`) registers the matchers and runs `cleanup()` after each test.

```bash
npm run test:run
```

## What changed compared to the original

- **Build tool:** Create React App (`react-scripts@3.2.0`) → Vite 8.
- **React:** 16.10 → 19; `ReactDOM.render` → `createRoot` with `<StrictMode>`.
- **Entry point:** `src/index.js` → `src/main.jsx`; removed the legacy `import React` (new JSX runtime).
- **Service worker:** removed the unused CRA `serviceWorker.js`.
- **HTML:** moved `index.html` to the project root, replaced `%PUBLIC_URL%` with root-relative paths, added the module script entry.
- **Tooling added:** ESLint 9 flat config, Prettier 3, Vitest 4 + Testing Library with real component tests.
- **Security:** 223 → 0 vulnerabilities.
- **Outbound link:** `reactjs.org` → `react.dev`.
