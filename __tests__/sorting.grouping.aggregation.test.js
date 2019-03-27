const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

describe('Sorting, Grouping and Aggregation Examples', () => {
    test('SGA01: Sort descriptions by Colour name using $sort', () => {
        testJsonataExpr(inputJson, `
        $sort(Account.Order.Product.Description, function($left, $right) {
            $left.Colour >= $right.Colour 
        })
        `)
    })

    test('SGA02: Sort descriptions by Colour name using order-by', () => {
        testJsonataExpr(inputJson, `Account.Order.Product.Description^(Colour)`) 
    })

    test('SGA03: Group description by Colour', () => {
        testJsonataExpr(inputJson, `Account.Order.Product.{Description.Colour: Description}`)
    })

    test('SGA04: Group descriptions by Colours, add only Width, Height and Depth to result object with custom labels W, H and D', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.{
            Description.Colour: {
                "W": Description.Width, 
                "H": Description.Height, 
                "D": Description.Depth
            }
        }`)
    })

    test('SGA05: Group Products by SKU, group Quantity and Price inside Array when occurences are repeated', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.\${
            SKU: {
                "Quantity": Quantity,
                "Price": Price
            }
        }`)
    })

    test('SGA06: Aggregate by running sum of all product prices', () => {
        testJsonataExpr(inputJson, `
        $sum(Account.Order.Product.Price)
        `)
    })

    test('SGA07: Aggregate by running sum of all product prices multiplied by quantity in order', () => {
        testJsonataExpr(inputJson, `
        $sum(Account.Order.Product.(Price*Quantity))
        `)
    })
})