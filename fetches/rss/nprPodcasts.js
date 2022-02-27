let Parser = require('rss-parser');
let parser = new Parser()

const PODCASTS_URL = 'https://feeds.npr.org/510318/podcast.xml'

module.exports = async () => {
    const feed = await parser.parseURL(PODCASTS_URL)
    return feed
}