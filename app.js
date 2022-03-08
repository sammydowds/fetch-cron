const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const processPolygonApiGroupData = require('./fetches/helpers/processPolygonApiGroupData')
const fetchPolygonStockData = require('./fetches/fetchPolygonStockData')
const rssConstants = require('./fetches/rss/constants')
const nprFeed = require('./fetches/rss/npr'); 
const rssParser = require('./fetches/rss/rssParser')
const stocks = require('./fetches/stocks');
const fetchOpenWeatherForecastData = require('./fetches/fetchOpenWeatherForecastData');
require('dotenv').config();


const CHICAGO_LAT_LONG = [41.85, -87.65]
const OKC_LAT_LONG = [35.4676,-97.5164]
const LV_LAT_LONG = [36.1699,-115.1398]

schedule.scheduleJob('5 4 * * *', async () => {

  // create yesterday date
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(yesterday.getDate() - 1)

  // calc day for polygon stock request
  const weekendOffset = yesterday.getDay() === 0 ? 2 : yesterday.getDay() === 6 ? 1 : 0
  yesterday.setDate(yesterday.getDate() - weekendOffset)
  const formattedDate = yesterday.toISOString().replace(/T.*/,'').split('-').join('-')

  console.log('Fetching weather data ------------------')
  const chicagoWeatherData = await fetchOpenWeatherForecastData(CHICAGO_LAT_LONG[0], CHICAGO_LAT_LONG[1], 2)
  const okcWeatherData = await fetchOpenWeatherForecastData(OKC_LAT_LONG[0], OKC_LAT_LONG[1], 2)
  const lasVegasWeatherData = await fetchOpenWeatherForecastData(LV_LAT_LONG[0], LV_LAT_LONG[1], 2)

  console.log('Fetching polygon data -------------------')
  const polygonStockData = await fetchPolygonStockData(formattedDate)
  const processedPolygonGroupData = processPolygonApiGroupData(polygonStockData, stocks)

  console.log('Fetching npr data -------------------')
  const nprTopStories = await nprFeed()

  console.log('Fetching engineering feed data -------------------')
  const hackerNews = await rssParser(rssConstants.rssFeeds.hackerNews)
  const freeCodeCamp = await rssParser(rssConstants.rssFeeds.freeCodeCamp)

  console.log('Fetching history feed data -------------------')
  const histChannelFeed = await rssParser(rssConstants.rssFeeds.historyChannel)

  console.log('Constructing email --------------------')
  const data = { 
    chicagoWeatherData,
    freeCodeCamp,
    okcWeatherData,
    lasVegasWeatherData,
    processedPolygonGroupData,
    nprTopStories, 
    hackerNews,
    histChannelFeed,
  }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

