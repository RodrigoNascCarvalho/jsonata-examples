const jsonata = require('jsonata')

module.exports = {
    testJsonataExpr: (inputJson, exprStr) => {
        const expression = jsonata(exprStr)
        const result = expression.evaluate(inputJson)
        expect(result).toMatchSnapshot()
    }
}
