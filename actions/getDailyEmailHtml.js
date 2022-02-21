const ReactDOMServer = require('react-dom/server')
const Email = require('../lib/email').default

module.export = () => {
  return ReactDOMServer.renderToStaticMarkup(Email)
}
