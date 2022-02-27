const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
const rssConstants = require('./fetches/rss/constants')
const nprFeed = require('./fetches/rss/npr'); 
const cmuFeed = require('./fetches/rss/cmu'); 
const mechEngineeringNotesFeed= require('./fetches/rss/menotes'); 
const historyChannelFeed = require('./fetches/rss/historyChannel');
require('dotenv').config();

schedule.scheduleJob('44 10 * * *', async () => {

  console.log('Fetching yahoo data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  const vtsaxStockData = await fetchYahooStockTickerData('VTSAX')

  console.log('Fetching npr data -------------------')
  const nprTopStories = await nprFeed()
  const nprArchitectureStories = await nprFeed(rssConstants.nprCategories.architecture)
  const nprWorldStories = await nprFeed(rssConstants.nprCategories.world)
  const nprTechStories = await nprFeed(rssConstants.nprCategories.tech)

  console.log('Fetching engineering feed data -------------------')
  const cmuSeiRssFeed = await cmuFeed()
  const mechEngRssFeed = await mechEngineeringNotesFeed()

  console.log('Fetching history feed data -------------------')
  const histChannelFeed = await historyChannelFeed()

  console.log('Constructing email --------------------')
  const data = { 
    tslaStockData, 
    vtsaxStockData, 
    nprTopStories, 
    nprArchitectureStories,
    nprWorldStories,
    nprTechStories,
    cmuSeiRssFeed,
    mechEngRssFeed,
    histChannelFeed
  }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

