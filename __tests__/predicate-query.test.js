const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

test('Predicate query: Select all Products with the ProductID for Bowler Hat', () => {
    testJsonataExpr(inputJson, 'Account.Order.Product[ProductID=858383]')
})

test('Predicate query: Select all Orders regardless of JSON structure', () => {
    testJsonataExpr(inputJson, '*.Order')
})

test('Predicate query: Select all properties from Orders regardless of properties names', () => {
    testJsonataExpr(inputJson, 'Account.Order.*')
})

test('Predicate query: Select all Products regardless of structure level', () => {
    testJsonataExpr(inputJson, '**.Product')
})

