# React + Vite + Jest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

In addition to this Jest configuration is added.

## Features

- Runs prettier code formatting during commit
- added jest and sample test file in example folder

## How to use it

- Clone it

```bash
git clone https://github.com/subraatakumar/vite-react-jest.git my-react-app
```

use your own app name in place of my-react-app

```bash
cd my-react-app
npm install
```

## Running Example

Sample components and test files are updated with in example folder.

To run these test examples

```bash
npm run test
```

To learn more visit example folder

## Ensure test cases during commit

- To ensure test cases during commit please uncomment the second line `.husky/pre-commit`
- You can add other commands as per your requirement

## To bypass husky during commit

- This step is not advisible

```bash
git commit --no-verify -m "commit message"
```
