module.exports = function (babel) {
  return {
    visitor: {
      CallExpression(path, state) {
        console.log(path)
      }
    }
  }
}
