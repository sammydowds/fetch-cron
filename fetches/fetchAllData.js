const fetchPolygonStockData = require('./fetchPolygonStockData')
const rssConstants = require('./rss/constants')
const nprFeed = require('./rss/npr'); 
const rssParser = require('./rss/rssParser')
const fetchOpenWeatherForecastData = require('./fetchOpenWeatherForecastData');
require('dotenv').config();


const CHICAGO_LAT_LONG = [41.85, -87.65]
const OKC_LAT_LONG = [35.4676,-97.5164]
const LV_LAT_LONG = [36.1699,-115.1398]

module.exports = async () => {

    let promises = []

    // create yesterday date
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(yesterday.getDate() - 1)

    // calc day for polygon stock request
    const weekendOffset = yesterday.getDay() === 0 ? 2 : yesterday.getDay() === 6 ? 1 : 0
    yesterday.setDate(yesterday.getDate() - weekendOffset)
    const formattedDate = yesterday.toISOString().replace(/T.*/,'').split('-').join('-')

    console.log('Fetching data ------------------')
    promises.push(fetchOpenWeatherForecastData(CHICAGO_LAT_LONG[0], CHICAGO_LAT_LONG[1], 2))
    promises.push(fetchOpenWeatherForecastData(OKC_LAT_LONG[0], OKC_LAT_LONG[1], 2))
    promises.push(fetchOpenWeatherForecastData(LV_LAT_LONG[0], LV_LAT_LONG[1], 2))
    promises.push(rssParser(rssConstants.rssFeeds.hackerNews))
    promises.push(rssParser(rssConstants.rssFeeds.freeCodeCamp))
    promises.push(rssParser(rssConstants.rssFeeds.mitEngineering))
    promises.push(rssParser(rssConstants.rssFeeds.fiveThirtyEight))
    promises.push(rssParser(rssConstants.rssFeeds.investopedia))
    promises.push(nprFeed())
    promises.push(rssParser(rssConstants.rssFeeds.historyChannel))
    promises.push(fetchPolygonStockData(formattedDate))

    const [
        chicagoWeatherData,
        okcWeatherData,
        lasVegasWeatherData,
        hackerNews,
        freeCodeCamp,
        mitEngineering,
        fiveThirtyEight,
        investopedia,
        nprTopStories, 
        histChannelFeed,
        polygonStockData
     ] = await Promise.all(promises)

     return {
         chicagoWeatherData,
         okcWeatherData,
         lasVegasWeatherData,
         hackerNews,
         freeCodeCamp,
         mitEngineering,
         fiveThirtyEight,
         investopedia,
         nprTopStories, 
         histChannelFeed,
         polygonStockData
     }
}