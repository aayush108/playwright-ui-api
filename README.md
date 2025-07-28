# KBV UI Tests

KBV UI Tests leverage Microsoft’s Playwright framework to perform end-to-end testing for the Knowledge-Based Verification (KBV) service. These tests ensure the reliability and accuracy of the KBV-aaS platform across multiple browsers.

---

## Features
- **Cross-Browser Testing**: Run tests on Chromium, Firefox, and WebKit.
- **Headless and Headed Execution**: Execute tests in headless mode for speed or headed mode for debugging.
- **Automated Screenshots and Videos**: Capture screenshots and videos for debugging failed tests.
- **Parallel Execution**: Reduce test runtime by running tests in parallel.
- **Rich API**: Simulate user interactions and validate application behavior using Playwright’s extensive API.

---

## Getting Started

### Prerequisites
Ensure the following are installed on your system:
- **Node.js** (version 14 or above)
- **npm** (comes with Node.js)

---
#### Install nvm (Node Version Manager) via Homebrew (Recommended for Mac)
To ensure you are using the correct Node.js and npm versions, install `nvm` and use the provided `.nvmrc` file:

```bash
brew install nvm
mkdir ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install # This uses the version specified in .nvmrc
nvm use
```

> **Note:** The `.nvmrc` file in this repository specifies the required Node.js version.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://gitlab.com/dwp/dynamic-trust-hub/knowledge-based-verification/kbv-ui-tests
   cd kbv-ui-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

---

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Files
```bash
npx playwright test tests/success-test.spec.js
npx playwright test tests/failed-validation-test.spec.js
```

### Run Tests in Headed Mode (Visible Browser)
```bash
npx playwright test --headed
```

### Run Tests in UI Mode
Playwright provides a UI mode to debug tests interactively:
```bash
npx playwright test --ui
```
This opens a Playwright Test Runner UI where you can:
- View test results.
- Re-run specific tests.
- Debug tests interactively.

### Run Specific UI Test Files
```bash
npx playwright test tests/success-test.spec.js
npx playwright test tests/failed-validation-test.spec.js
```

### Run API Tests
API tests are located in the `tests/api-tests` directory. To run all API tests:

```bash
npx playwright test tests/api-tests/
```

To run a specific API test file, for example:

```bash
npx playwright test tests/api-tests/kbv-ms/kbvStandaloneTest.spec.js
```

---

## Debugging and Reporting

### Generate Test Report
After running tests, generate and view the test report:
```bash
npx playwright show-report
```

### Debugging Failed Tests
- **Screenshots**: Automatically captured for failed tests.
- **Videos**: Enable video recording in the Playwright configuration for detailed debugging.
- **Tracing**: Use Playwright’s trace viewer to debug complex issues:
  ```bash
  npx playwright show-trace trace.zip
  ```

---

## CI/CD Integration
This project is configured to run tests in GitLab CI/CD pipelines. Update the `BASE_URL` environment variable in the pipeline configuration to switch between environments (e.g., `dev`, `test`).

---

