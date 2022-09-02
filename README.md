# React-Template

This template is based on the pure commands of each installed library.
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#test">Test</a></li>
      </ul>
    </li> 
    <li><a href="#contact">Contact</a></li> 
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To run locally need to install some package, set env and run as localhost.

### Prerequisites

Install NodeJs at [https://nodejs.org/es/download/](https://nodejs.org/es/download/)

### Installation

_Follow these steps to run locally._

1. Clone the repo
   ```sh
   git clone https://github.com/Aquil3sVoy/react-base
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or use yarn
3. Run locally use this command:
   ```sh
   npm run start
   ```
4. Open the browser and go to http://localhost:3000

### Test

1. Tes:
   ```sh
   npm run test
   ```
2. Build:
   ```sh
   npm run test:coverage
   ```

## Features

- [React 17](https://es.reactjs.org/versions) with [React-Router 6](https://reactrouter.com/en/main/getting-started/overview)
- TypeScript
- [Jest](https://jestjs.io/) and [Testing-Library] (https://testing-library.com/)
- [Tailwind](https://tailwindcss.com/)
- [Redux](https://redux.js.org/) and [React-Redux](https://react-redux.js.org/introduction/getting-started)

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript, some commond errors.
- [Prettier](https://prettier.io/) - configured for

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - Help to detect common mistakes in commits. (Recommended)

## Checklist

Use the following checklist to help you get started:

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the favicon in `public`
- [ ] Modify the manifest in `public`
- [ ] Clean up the README's content

### Issues

#### REACT-PLUGIN

"vite": "^3.0.7"+ "@vitejs/plugin-react": "^2.0.1", can't resolve ... because of the version conflict. Just waiting until vite update plugin-react to +2.3.
