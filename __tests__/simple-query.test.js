const { testJsonataExpr } = require('./jsonata-helper')

test('Simple query to get descriptions for each product', () => {
    testJsonataExpr('Account.Order.Product.Description')
})

test('Simple query flattening of data, select colors for description', () => {
    testJsonataExpr('Account.Order.Product.Description.Colour')
})

test('Simple query flattening of data, select only first product of each order', () => {
    testJsonataExpr('Account.Order.Product[0]')
})

test('Simple query flattening of data, select only first color', () => {
    testJsonataExpr('(Account.Order.Product.Description.Colour)[0]')
})

test('Simple query flattening of data, select only second color', () => {
    testJsonataExpr('(Account.Order.Product.Description.Colour)[1]')
})

test('Simple query flattening of data, select only last color', () => {
    testJsonataExpr('(Account.Order.Product.Description.Colour)[-1]')
})

test('Simple query flattening of data, select only before last color', () => {
    testJsonataExpr('(Account.Order.Product.Description.Colour)[-2]')
})

test('Simple query flattening of data, select only first three colors', () => {
    testJsonataExpr('(Account.Order.Product.Description.Colour)[[0..2]]')
})

