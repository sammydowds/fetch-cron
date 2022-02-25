let Parser = require('rss-parser');
let constants = require('./constants');
let parser = new Parser()

const NPR_RSS_FEED_URL = 'https://feeds.npr.org/'
const NPR_FILE_URL = 'rss.xml'

module.exports = async (category = constants.nprCategories.topStories) => {
    const url = `${NPR_RSS_FEED_URL}/${category}/${NPR_FILE_URL}`
    const feed = await parser.parseURL(url)
    return feed
}
