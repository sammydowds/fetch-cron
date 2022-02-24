let Parser = require('rss-parser');
let parser = new Parser()

const NPR_RSS_FEED_URL = 'https://feeds.npr.org/'
const NPR_FILE_URL = 'rss.xml'

const CATEGORIES = {
    architecture: 1142,
    bookes: 1032,
    fitness: 1134,
    topStories: 1002,
    history: 1136
}

module.exports = async (category = CATEGORIES.topStories) => {
    const url = `${NPR_RSS_FEED_URL}/${category}/${NPR_FILE_URL}`
    const feed = await parser.parseURL(url)
    return feed
}
