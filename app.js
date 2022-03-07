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


// TODO: create a constants file for these
const CHICAGO_LAT_LONG = [41.85, -87.65]
const OKC_LAT_LONG = [35.4676,-97.5164]
const LV_LAT_LONG = [36.1699,-115.1398]

// TODO: add cool material feed https://coolmaterial.com/feed/
// TODO: add architectural digest https://www.architecturaldigest.com/feed/rss

schedule.scheduleJob('5 4 * * *', async () => {

  // TODO: refactor this data fetching into a single function 
  const currentDate = new Date();
  const pastDate = new Date(currentDate);

  // calc day for polygon stock request
  const weekendOffset = pastDate.getDay() !== 0 ? pastDate.getDay() % 5 : 2
  pastDate.setDate(pastDate.getDate() - weekendOffset)
  const formattedDate = pastDate.toISOString().replace(/T.*/,'').split('-').join('-')
  console.log('FORMATTED DATE', formattedDate)

  // TODO: split up and read a book - https://pdf-lib.js.org/
  console.log('Fetching weather data ------------------')
  const chicagoWeatherData = await fetchOpenWeatherForecastData(CHICAGO_LAT_LONG[0], CHICAGO_LAT_LONG[1], 2)
  const okcWeatherData = await fetchOpenWeatherForecastData(OKC_LAT_LONG[0], OKC_LAT_LONG[1], 2)
  const lasVegasWeatherData = await fetchOpenWeatherForecastData(LV_LAT_LONG[0], LV_LAT_LONG[1], 2)

  console.log('Fetching polygon data -------------------')
  const polygonStockData = await fetchPolygonStockData(formattedDate)
  const processedPolygonGroupData = processPolygonApiGroupData(polygonStockData, stocks)

  console.log('Fetching npr data -------------------')
  const nprTopStories = await nprFeed()
  const nprArchitectureStories = await nprFeed(rssConstants.nprCategories.architecture)
  const nprWorldStories = await nprFeed(rssConstants.nprCategories.world)
  const nprTechStories = await nprFeed(rssConstants.nprCategories.tech)
  const nprPodcasts = await rssParser(rssConstants.rssFeeds.nprPodcasts)

  console.log('Fetching engineering feed data -------------------')
  // TODO: swap out with free code camp
  const cmuSeiRssFeed = await rssParser(rssConstants.rssFeeds.cmu)
  const mitMechE = await rssParser(rssConstants.rssFeeds.mitMechanicalEngineering)
  const mitUrbanP = await rssParser(rssConstants.rssFeeds.mitUrbanPlanning)
  const hackerNews = await rssParser(rssConstants.rssFeeds.hackerNews)
  const freeCodeCamp = await rssParser(rssConstants.rssFeeds.freeCodeCamp)

  console.log('Fetching history feed data -------------------')
  const histChannelFeed = await rssParser(rssConstants.rssFeeds.historyChannel)

  console.log('Fetching health and fitness feed data -------------------')
  const nerdFitnessFeed = await rssParser(rssConstants.rssFeeds.nerdFitness)
  const muscleAndFitnessFeed = await rssParser(rssConstants.rssFeeds.muscleAndFitness)

  console.log('Constructing email --------------------')
  const data = { 
    chicagoWeatherData,
    freeCodeCamp,
    okcWeatherData,
    lasVegasWeatherData,
    processedPolygonGroupData,
    nprTopStories, 
    nprArchitectureStories,
    nprWorldStories,
    nprTechStories,
    cmuSeiRssFeed,
    mitMechE,
    mitUrbanP,
    hackerNews,
    histChannelFeed,
    nprPodcasts,
    nerdFitnessFeed,
    muscleAndFitnessFeed
  }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

schedule.scheduleJob('5 16 * * *', async () => {

  const currentDate = new Date();
  const pastDate = new Date(currentDate);

  // calc day for polygon stock request
  const weekendOffset = pastDate.getDay() !== 0 ? pastDate.getDay() % 5 : 2
  pastDate.setDate(pastDate.getDate() - weekendOffset)
  const formattedDate = pastDate.toISOString().replace(/T.*/,'').split('-').join('-')
  console.log('FORMATTED DATE', formattedDate)

  // TODO: split up and read a book - https://pdf-lib.js.org/

  console.log('Fetching weather data ------------------')
  const chicagoWeatherData = await fetchOpenWeatherForecastData(CHICAGO_LAT_LONG[0], CHICAGO_LAT_LONG[1], 2)
  const okcWeatherData = await fetchOpenWeatherForecastData(OKC_LAT_LONG[0], OKC_LAT_LONG[1], 2)
  const lasVegasWeatherData = await fetchOpenWeatherForecastData(LV_LAT_LONG[0], LV_LAT_LONG[1], 2)

  console.log('Fetching yahoo data -------------------')
  const polygonStockData = await fetchPolygonStockData(formattedDate)
  const processedPolygonGroupData = processPolygonApiGroupData(polygonStockData, stocks)

  console.log('Fetching npr data -------------------')
  const nprTopStories = await nprFeed()
  const nprArchitectureStories = await nprFeed(rssConstants.nprCategories.architecture)
  const nprWorldStories = await nprFeed(rssConstants.nprCategories.world)
  const nprTechStories = await nprFeed(rssConstants.nprCategories.tech)
  const nprPodcasts = await rssParser(rssConstants.rssFeeds.nprPodcasts)
  console.log(nprPodcasts)

  console.log('Fetching engineering feed data -------------------')
  const cmuSeiRssFeed = await rssParser(rssConstants.rssFeeds.cmu)
  const mitMechE = await rssParser(rssConstants.rssFeeds.mitMechanicalEngineering)
  const mitUrbanP = await rssParser(rssConstants.rssFeeds.mitUrbanPlanning)
  const hackerNews = await rssParser(rssConstants.rssFeeds.hackerNews)

  console.log('Fetching history feed data -------------------')
  const histChannelFeed = await rssParser(rssConstants.rssFeeds.historyChannel)

  console.log('Fetching health and fitness feed data -------------------')
  const nerdFitnessFeed = await rssParser(rssConstants.rssFeeds.nerdFitness)
  const muscleAndFitnessFeed = await rssParser(rssConstants.rssFeeds.muscleAndFitness)

  console.log('Constructing email --------------------')
  const data = { 
    chicagoWeatherData,
    okcWeatherData,
    lasVegasWeatherData,
    processedPolygonGroupData,
    nprTopStories, 
    nprArchitectureStories,
    nprWorldStories,
    nprTechStories,
    cmuSeiRssFeed,
    mitMechE,
    mitUrbanP,
    hackerNews,
    histChannelFeed,
    nprPodcasts,
    nerdFitnessFeed,
    muscleAndFitnessFeed
  }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

