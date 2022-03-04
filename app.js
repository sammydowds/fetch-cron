const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
const rssConstants = require('./fetches/rss/constants')
const nprFeed = require('./fetches/rss/npr'); 
const rssParser = require('./fetches/rss/rssParser')
require('dotenv').config();

schedule.scheduleJob('5 4 * * *', async () => {

  // TODO: split up and read a book - https://pdf-lib.js.org/

  console.log('Fetching yahoo data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  const vtsaxStockData = await fetchYahooStockTickerData('VTSAX')

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
    tslaStockData, 
    vtsaxStockData, 
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

