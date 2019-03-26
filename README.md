# JSONata Examples

## Description
This repository consists of a test suite that tests each one of the cases from [JSONata documentation](http://docs.jsonata.org/simple) and generates output examples in the form of Jest Snapshots.

## Helpers
A helper for testing is used in:

```
__tests__/jsonata-helper.js
```

to generalize the code used for evaluating the JSONata expression and generating a Jest Snapshot .

## Snapshots
Snapshots can be checked at:

```
__tests__/__snapshots__/ 
```

with the results for each test case

## Mocks
Only one mock is used as a JSON Example, it can be found under:
```
__mocks__/example-json.js
```

## How-to-run
In order to run the tests:
```
npm install
npm run test:run
```

To regenerate snapshots when data is changed for testing:
```
npm run test:generate-snapshots
```

To run in watch mode while adding new test cases:
```
npm run test:watch
```

