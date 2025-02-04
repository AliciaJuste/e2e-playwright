# Playwright E2E Test

> Typescript and Playwright with Cucumber e2e testing project.

### 💻 Description
E2e tests for https://www.saucedemo.com/

Covered Features:
- Visit Home Page
- Login user
- Product page content
- Buy product
- Remove product

## 💻 Pre-requisites

1. Download and Install Node JS: https://nodejs.org/en/download
2. Download and Install git: https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git
3. Download and Install Visual Studio Code (Optional): https://code.visualstudio.com/download

## 🚀 Install the project
With Visual Studio Code:
1. Download the Project (Download Zip File) or Download from github with visual studio extension.
2. Open the project in visual studio
3. Install dependencies in visual studio terminal: npm install
4. Install Playwright Browsers: npx playwright install

## Run tests in local:
1. Run test on Desktop: npm run test:desktop
2. Run test on Mobile: npm run test:mobile

## Generate Test results report
1. To generate reports run: npm run generate-report

## Run Playwright Code Generator
npx playwright codegen playwright.dev

## Run specific scenario
1. add tag to scenario in feature file
2. Run command npm run test -- --tags '@tag'
3. Run in debug mode npm run debug -- --tags '@tag'

## DEBUG SPECIFIC SCENARIO
1. npm run debug:desktop -- --tags '@buyproduct'
2. npm run debug:mobile -- --tags '@buyproduct'

##  Run tests on CI with github Actions:
1. This test are running after each push in the github repository or can be run manually (access required)
2. Test results reports in HTML and VIDEO can be found in latest runs artifacts.


## Autora
Alicia Juste: https://www.linkedin.com/in/alicia-juste/
