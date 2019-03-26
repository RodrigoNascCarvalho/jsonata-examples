const { testJsonataExpr } = require('./jsonata-helper')
const inputJson = require('example-json')

test('Flattening of data + concat of data into string', () => {
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

test('Only return product descriptions where width is larger than height AND color is black', () => {
    testJsonataExpr(inputJson, `
    Account.Order.Product.Description[
        Width > Height and Colour = 'Black'
    ]
    `)
});

test('Only return product descriptions where width is larger than height OR color is black', () => {
    testJsonataExpr(inputJson, `
    Account.Order.Product.Description[
        Width > Height or Colour = 'Black'
    ]
    `)
});

test('Numeric operations on data for widths and heights resulting in array with all results for each Product Description', () => {
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

