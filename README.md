## Pre-Requisites
[Node](https://nodejs.org/en/download/package-manager) JavaScript runtime environment.

## Setup

```bash
# clone repo
$ git clone https://github.com/InnerWorks-me/qa-testing-task.git

# install dependencies
$ npm install

# run integration tests
$ npm run test:integration
```
Ensure the tests all pass, if not, let us know before starting.

## Navigating the Repo

The `src` folder contains the main source code, which is a simple CRUD application editing an in-memory data source. The files included are `task.module`, `task.controller`, `task.service`, and `main.ts`. For more information on the structure of a NestJS application see the docs on [controllers](https://docs.nestjs.com/controllers), [providers](https://docs.nestjs.com/providers), and [modules](https://docs.nestjs.com/modules). 

The `test` folder contains an integration test to check the application functionality, it currently only tests the endpoint to create an item, the task will be to test the other functionality (see below). The files included are `task.intergation-test-cases`, `task.integration.spec`, and `jest-integration.json`.

## The Task

The task will be based around the `task.integration.spec` files and the `task.integration-test-cases` files. The `task.integration.spec` file has code to launch the application, a function to call the `/items` POST endpoint, and two tests for success and failure when calling that endpoint. 

There are four other endpoints to be tested:
1. `/items` GET
2. `/items/{id}` GET
3. `/items/:id` PUT
4. `/items/:id` DELETE
All endpoints can be seen in the `task.controller` file in `src`.

Your task will involve the following:
1. Add 8 new test cases to the `task.integration-test-cases` file, a success and failure test case for each of the endpoints.
2. Add 4 new functions to `task.integration.spec` to call each of the endpoints, using the `testCreateEndpointScenario` function as an example.
3. Add 8 new tests to `task.integration.spec` using each of the 8 test cases created in `task.integration-test-cases`.

All test cases should successfully run with
```bash
$ npm run test:integration
```
