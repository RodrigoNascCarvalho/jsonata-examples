const { testJsonataExpr } = require('./jsonata-helper')

test('Predicate query: Select all Products with the ProductID for Bowler Hat', () => {
    testJsonataExpr('Account.Order.Product[ProductID=858383]')
})

test('Predicate query: Select all Orders regardless of JSON structure', () => {
    testJsonataExpr('*.Order')
})

test('Predicate query: Select all properties from Orders regardless of properties names', () => {
    testJsonataExpr('Account.Order.*')
})

test('Predicate query: Select all Products regardless of structure level', () => {
    testJsonataExpr('**.Product')
})

