let Parser = require('rss-parser');
let parser = new Parser()

const HISTORY_CHANNEL_FEED = 'https://www.history.com/.rss/excerpt/news'

module.exports = async () => {
    const feed = await parser.parseURL(HISTORY_CHANNEL_FEED)
    return feed
}