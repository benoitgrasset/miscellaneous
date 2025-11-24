### Tests / MSW

- [jest-msw](https://delicious-insights.com/fr/articles/jest-msw/): simulez vos appels réseau pour vos tests jest avec msw
- [The React Testing Library Guide I Wish I Had](https://blog.theodo.com/2021/12/react-testing-library-guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/): end to end testing
- [playwright](https://playwright.dev/): multiple browsers (not only Chromium-based browsers), faster
- [jest preview](https://www.jest-preview.com/docs/getting-started/intro/): See your test output directly in the browser
- [BackstopJS](https://github.com/garris/BackstopJS): BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time
- [Testing Playground](https://testing-playground.com/)
- [BrowserStack](https://www.browserstack.com/): testing on 3000+ real devices and browsers
- https://www.franciscomoretti.com/blog/what-tests-to-write-for-react
- https://blacksheepcode.com/posts/encapsulate_as_much_state_as_possible: encapsulate the loading state of a button triggering an async action for better testing

### Fake data

- [json placeholder](https://jsonplaceholder.typicode.com/)
- [faker](https://fakerjs.dev/)
- [chancejs](https://chancejs.com/)

## Vitest - Playwright - RTL

- https://www.epicweb.dev/vitest-browser-mode-vs-playwright

Vite → Vitest → Browser Mode

- Use **Vitest** for unit and integration tests in Node.js;
- Use **Vitest Browser Mode** for testing your components in the real browser; do not need **JSDOM** - replace Vitest and React Testing Library - RTL relies on JSDOM for simulating DOM interaction
- Use **Playwright (@playwright/test)** for end-to-end testing your apps;
- Use **Playwright (playwright)** for general purpose browser automation.

- 👉 **RTL** doesn’t execute tests, doesn’t simulate a browser, and doesn’t automate pages.
It simply interacts with the DOM you provide it. React Testing Library (RTL) is not a browser or test runner.
It’s a DOM querying & component interaction library designed to test React components the way a user would.


### Others

- [microcks](https://microcks.io/documentation/getting-started/)
- [playwright-checks](https://www.checklyhq.com/docs/detect/synthetic-monitoring/playwright-checks/overview/)

### Mobile

- [appetize.io](https://appetize.io/)
- [bluestacks](https://www.bluestacks.com/download.html)
- [genymotion](https://www.genymotion.com/)
- [vysor](https://www.vysor.io/)

## Automated tests with AI

- [meticulous.ai](https://www.meticulous.ai/): Cover the 1000s of edge cases of your application - without writing or maintaining a single test.
- [CarbonQA](https://carbonqa.com/): provides high-quality QA services for dev teams, so you’ll never have to waste time testing your own app again.
