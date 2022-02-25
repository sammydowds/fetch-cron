let Parser = require('rss-parser');
let parser = new Parser()

const ME_NOTES_RSS_FEED_URL = 'https://mechanicalenotes.com/feed/'

module.exports = async () => {
    const feed = await parser.parseURL(ME_NOTES_RSS_FEED_URL)
    return feed
}