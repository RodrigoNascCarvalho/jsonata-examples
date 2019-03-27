const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

describe('Predicate Queries Examples', () => {
    test('PQ01: Select all Products with the ProductID for Bowler Hat', () => {
        testJsonataExpr(inputJson, 'Account.Order.Product[ProductID=858383]')
    })
    
    test('PQ02: Select all Orders regardless of JSON structure', () => {
        testJsonataExpr(inputJson, '*.Order')
    })
    
    test('PQ03: Select all properties from Orders regardless of properties names', () => {
        testJsonataExpr(inputJson, 'Account.Order.*')
    })
    
    test('PQ04: Select all Products regardless of structure level', () => {
        testJsonataExpr(inputJson, '**.Product')
    })
})
