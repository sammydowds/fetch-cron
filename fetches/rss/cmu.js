let Parser = require('rss-parser');
let parser = new Parser()

const CMU_SEI_RSS_FEED_URL = 'https://insights.sei.cmu.edu/blog/feeds/latest/rss/'

module.exports = async () => {
    const feed = await parser.parseURL(CMU_SEI_RSS_FEED_URL)
    return feed
}