var babel = require('babel')

module.exports = {
  process: function (src, filename) {
    if(filename.indexOf('node_modules') === -1 && babel.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename
      }).code
    }
    return src
  }
}
