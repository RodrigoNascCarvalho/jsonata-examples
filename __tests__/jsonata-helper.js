const jsonata = require('jsonata')
const colors = require('colors/safe')

const log = (...args) => (process.env.DEBUG ? console.log(...args) : () => {})

module.exports = {
    testJsonataExpr: (inputJson, exprStr) => {
        log(colors.yellow('Input:'), colors.yellow.italic(JSON.stringify(inputJson, null, 2)))
        log(colors.cyan('Expr:'), colors.cyan.underline(exprStr))
        const expression = jsonata(exprStr)
        const result = expression.evaluate(inputJson)
        expect(result).toMatchSnapshot()
        log(colors.green('Output:'), colors.green.bold(JSON.stringify(result,null, 2)))
    }
}
