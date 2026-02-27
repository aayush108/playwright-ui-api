# Playwright UI + API Tests

This repository contains a starter setup for Playwright end-to-end testing across UI and API layers.

## Highlights

- Cross-browser UI tests (Chromium, Firefox, WebKit)
- API tests using Playwright's `request` fixture
- TypeScript-first test code
- ESLint + Prettier for consistent code quality
- GitHub Actions CI workflow with test report artifacts

## Prerequisites

- Node.js (use the version in `.nvmrc`)
- npm

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Configuration

Tests use `BASE_URL` from the environment and default to `https://example.com` when unset.

Create an environment file if needed:

```bash
cp .env.example .env
```

## Run tests

Run all tests:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Run in headed mode:

```bash
npm run test:headed
```

List discovered tests:

```bash
npm run test:list
```

Open the HTML report:

```bash
npm run report
```

## Code quality commands

```bash
npm run lint
npm run typecheck
npm run format:check
```

## Repository layout

```text
.
├── .github/workflows/ci.yml
├── playwright.config.ts
├── tests/
│   ├── api/
│   └── ui/
└── tsconfig.json
```

