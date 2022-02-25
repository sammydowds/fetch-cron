const ReactDOMServer = require('react-dom/server')
const Email = require('../lib/email').Email

module.exports = (data) => {
  return ReactDOMServer.renderToStaticMarkup(
    Email(
      { 
        tslaData: data.tslaStockData, 
        vtsaxData: data.vtsaxStockData, 
        nprTopStories: data.nprTopStories,
        nprArchitectureStories: data.nprArchitectureStories,
        nprTechStories: data.nprTechStories,
        nprWorldStories: data.nprWorldStories
      }
    )
  )
}
