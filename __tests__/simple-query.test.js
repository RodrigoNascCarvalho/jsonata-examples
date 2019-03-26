const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

test('Simple query to get descriptions for each product', () => {
    testJsonataExpr(inputJson, 'Account.Order.Product.Description')
})

test('Simple query flattening of data, select colors for description', () => {
    testJsonataExpr(inputJson, 'Account.Order.Product.Description.Colour')
})

test('Simple query flattening of data, select only first product of each order', () => {
    testJsonataExpr(inputJson, 'Account.Order.Product[0]')
})

test('Simple query flattening of data, select only first color', () => {
    testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[0]')
})

test('Simple query flattening of data, select only second color', () => {
    testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[1]')
})

test('Simple query flattening of data, select only last color', () => {
    testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[-1]')
})

test('Simple query flattening of data, select only before last color', () => {
    testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[-2]')
})

test('Simple query flattening of data, select only first three colors', () => {
    testJsonataExpr(inputJson, '(Account.Order.Product.Description.Colour)[[0..2]]')
})

