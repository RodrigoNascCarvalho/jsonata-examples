const jsonata = require('jsonata')
const json = require('example-json')

module.exports = {
    testJsonataExpr: (exprStr) => {
        const expression = jsonata(exprStr)
        const result = expression.evaluate(json)
        expect(result).toMatchSnapshot()
    }
}