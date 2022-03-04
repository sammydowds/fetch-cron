
const fs = require('fs')
const stockSummary = require('../templates/fixtures/stockSummary')
const renderToDesktopEmailHtml = require('./renderToDesktopEmailHtml')
const processStockSummaryDetail = require('../fetches/helpers/processStockSummaryDetail');
require('dotenv').config();

const PREVIEW_LOCATION = process.env.PREVIEW_LOCATION
const STOCK_DATA = processStockSummaryDetail(stockSummary)
const EMPTY_RSS_FEED = { 
    items: [ 
        { 
            title: 'Today is another day to rock with it, and be kind to each other', 
            content: 'Some times you need to take a second and realize how awesome you are. Super vital to do.', 
            link: '/' 
        }, 
        { 
            title: 'Today the sun is rising', 
            content: 'As everyone does their Wordle this morning, we look back on the best things in 2022.', 
            link: '/' 
        },
        { 
            title: 'Super long title to test the data out and make sure our styles are correct', 
            content: 'Another day of doing too much coding is on the horizon. Time to build and learn!', 
            link: '/' 
        },
        { 
            title: 'Ugh, another fake title for testing styles', 
            content: 'I am running out of fake content and ideas for fake content. Here is some content.', 
            link: '/' 
        } 
    ]
}
const NPR_PODCASTS = {
    items: [
        {
            title: 'Febuary, 22nd 2022',
            link: '1082036799', 
            content: 'Some news of the day.',
            pubDate: 'Febuary, 22nd 2022 Sunday 12:00:00'
        },
        {
            title: 'Febuary, 22nd 2022',
            link: '1082036799', 
            content: 'Some news of the day.'
        },
        {
            title: 'Febuary, 22nd 2022',
            link: '1082036799', 
            content: 'Some news of the day.'
        }
    ]
}
const SAMPLE_DATA = {
    tslaStockData: STOCK_DATA, 
    vtsaxStockData: STOCK_DATA, 
    nprTopStories: EMPTY_RSS_FEED,
    nprArchitectureStories: EMPTY_RSS_FEED,
    nprTechStories: EMPTY_RSS_FEED,
    nprWorldStories: EMPTY_RSS_FEED,
    cmuSeiRssFeed: EMPTY_RSS_FEED,
    mechEngRssFeed: EMPTY_RSS_FEED,
    hackerNews: EMPTY_RSS_FEED,
    histChannelFeed: EMPTY_RSS_FEED,
    nprPodcasts: NPR_PODCASTS,
    nerdFitnessFeed: EMPTY_RSS_FEED,
    mitMechE: EMPTY_RSS_FEED,
    mitUrbanP: EMPTY_RSS_FEED,
    muscleAndFitnessFeed: EMPTY_RSS_FEED
}
const htmlString = renderToDesktopEmailHtml(SAMPLE_DATA)
fs.writeFile(PREVIEW_LOCATION, htmlString, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('HTML preview was written to: ', PREVIEW_LOCATION)
    return
})