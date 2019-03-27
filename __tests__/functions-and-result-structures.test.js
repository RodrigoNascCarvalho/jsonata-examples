const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

describe('Functions + Result Structures Examples', () => {
    test('FR01: Flattening of data + concat of data into string', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description.(
            Colour & ':' & 
            Width & ':' &
            Height & ':' &
            Depth & ':' &
            Weight
        )
        `)
    })
    
    test('FR02: Only return product descriptions where width is larger than height AND color is black', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description[
            Width > Height and Colour = 'Black'
        ]
        `)
    })
    
    test('FR03: Using composition of queries, we can achieve the same result as using an AND operator', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description[
            (
                Width > Height;
                Colour = 'Black';
            )
        ]`)
    })
    
    test('FR04: Only return product descriptions where width is larger than height OR color is black', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description[
            Width > Height or Colour = 'Black'
        ]
        `)
    });
    
    test('FR05: Numeric operations on data for widths and heights resulting in array with all results for each Product Description', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description.[
            Width + Height,
            Width - Height,
            Width * Height,
            Width / Height,
            Width % Height
          ]
        `)
    })
    
    test('FR06: You can use parenthesis to set precedence of operations', () => {
        testJsonataExpr(inputJson, `
        Account.Order.Product.Description.[
            (Width + Height) * Depth
        ]
        `)
    })    
})
