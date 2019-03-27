const jsonata = require('jsonata')

const log = (...args) => (process.env.DEBUG ? console.log(...args) : () => {})

module.exports = {
    testJsonataExpr: (inputJson, exprStr) => {
        log('Input:', JSON.stringify(inputJson, null, 2))
        log('Expr:', exprStr)
        const expression = jsonata(exprStr)
        const result = expression.evaluate(inputJson)
        expect(result).toMatchSnapshot()
        log('Output:', JSON.stringify(result,null, 2))
    }
}
