const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

describe('Simple Queries Examples', () => {
    test('SQ01: Get descriptions for each product', () => {
        testJsonataExpr(inputJson, 'Account.Order.Product.Description')
    })
    
    test('SQ02: Flattening of data, select colors for description', () => {
        testJsonataExpr(inputJson, 'Account.Order.Product.Description.Colour')
    })
    
    test('SQ03: Flattening of data, select only first product of each order', () => {
        testJsonataExpr(inputJson, 'Account.Order.Product[0]')
    })
    
    test('SQ04: Flattening of data, select only first color', () => {
        testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[0]')
    })
    
    test('SQ05: Flattening of data, select only second color', () => {
        testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[1]')
    })
    
    test('SQ06: Flattening of data, select only last color', () => {
        testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[-1]')
    })
    
    test('SQ07: Flattening of data, select only before last color', () => {
        testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[-2]')
    })
    
    test('SQ08: Flattening of data, select only first three colors', () => {
        testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[[0..2]]')
    })
})