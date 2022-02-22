const ReactDOMServer = require('react-dom/server')
const Email = require('../lib/email').Email

module.exports = (data) => {
  return ReactDOMServer.renderToStaticMarkup(Email({ tslaData: data.tslaStockData, vtsaxData: data.vtsaxStockData }))
}
