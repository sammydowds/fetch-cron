
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
            title: 'Some Title', 
            content: 'Some content', 
            link: '/' 
        }, 
        { 
            title: 'Some Title', 
            content: 'Some content', 
            link: '/' 
        },
        { 
            title: 'Some Title', 
            content: 'Some content', 
            link: '/' 
        },
        { 
            title: 'Some Title', 
            content: 'Some content', 
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
    histChannelFeed: EMPTY_RSS_FEED,
    nprPodcasts: NPR_PODCASTS
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