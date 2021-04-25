const pluginTester = require('babel-plugin-tester').default
const plugin = require('../src/index')

const source = `
  const a = 123;
  console.log(a)
  alert(123)
`

const expect = `
  const a = 123;
  alert(123)
`

pluginTester({
  plugin,
  pluginName: 'remove console',
  tests: [
    {
      code: source,
      output: expect
    }
  ]
})
