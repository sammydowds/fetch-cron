let Parser = require('rss-parser');
let parser = new Parser()

module.exports = async (url) => {
    const feed = await parser.parseURL(url)
    return feed
}