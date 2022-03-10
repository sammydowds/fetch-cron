
const fs = require('fs')
const renderToDesktopEmailHtml = require('./renderToDesktopEmailHtml')
const processPolygonApiGroupData = require('../fetches/helpers/processPolygonApiGroupData');
const polygonGroupStockData = require('../templates/fixtures/polygonGroupStockData');
const openWeatherForecastDaily = require('../templates/fixtures/openWeatherForecastDaily');
const stocks = require('../fetches/stocks')
require('dotenv').config();

const PREVIEW_LOCATION = process.env.PREVIEW_LOCATION
const STOCK_DATA = processPolygonApiGroupData(polygonGroupStockData, stocks)
const SAMPLE_RSS_FEED = { 
    items: [ 
        { 
            title: 'Today is another day to rock with it, and be kind to each other', 
            content: 'Some times you need to take a second and realize how awesome you are. Super vital to do.', 
            link: '/',
            "content:encoded": "On March 5, 1966, Marvin Miller, the 48-year-old assistant to the president of the United Steelworkers of America, is elected the first full-time executive director of the Major League Baseball Players Association. Miller, whose role with the United Steelworkers of America included serving as lead negotiator, takes over at a time when the average yearly MLB player's salary is only $19,000 and the minimum salary is under $10,000. By the time Miller, a fierce advocate for MLB players, retires in 1982, the average salary for a player is $241,497. Looking back on the early days of his leadership of the MLBPA, Miller said the biggest problem was the low self-esteem of the players. They had been so beaten down [by management] that they really didn t understand their value in the game, he said. With the MLBPA, Miller also helped players win the right to seek arbitration to resolve contract disputes and advised Curt Flood when he sued the MLB over the reserve clause, which kept a player bound to his team. The reserve clause was struck down in 1975, leading to free agency for players. Miller described Flood as “a union leaders dream” for pursuing the lawsuit despite knowing that it would effectively end his career, but would benefit future players. Miller was a Brooklyn native with an economics degree from New York University. He worked with the National War Labor Board, then worked for the International Association of Machinists, the United Auto Workers and finally, the United Steelworkers of America."
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
        },
        { 
            title: 'Once more, a title of a news article', 
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
    chicagoWeatherData: openWeatherForecastDaily,
    freeCodeCamp: SAMPLE_RSS_FEED,
    okcWeatherData: openWeatherForecastDaily,
    lasVegasWeatherData: openWeatherForecastDaily,
    processedPolygonGroupData: STOCK_DATA, 
    vtsaxStockData: STOCK_DATA, 
    nprTopStories: SAMPLE_RSS_FEED,
    nprArchitectureStories: SAMPLE_RSS_FEED,
    nprTechStories: SAMPLE_RSS_FEED,
    nprWorldStories: SAMPLE_RSS_FEED,
    cmuSeiRssFeed: SAMPLE_RSS_FEED,
    mechEngRssFeed: SAMPLE_RSS_FEED,
    hackerNews: SAMPLE_RSS_FEED,
    histChannelFeed: SAMPLE_RSS_FEED,
    nprPodcasts: NPR_PODCASTS,
    nerdFitnessFeed: SAMPLE_RSS_FEED,
    mitMechE: SAMPLE_RSS_FEED,
    mitUrbanP: SAMPLE_RSS_FEED,
    muscleAndFitnessFeed: SAMPLE_RSS_FEED,
    incrementStripe: SAMPLE_RSS_FEED,
    mitEngineering: SAMPLE_RSS_FEED,
    investopedia: SAMPLE_RSS_FEED,
    fiveThirtyEight: SAMPLE_RSS_FEED,
    hackaday: SAMPLE_RSS_FEED
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