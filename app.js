const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
const rssConstants = require('./fetches/rss/constants')
const nprFeed = require('./fetches/rss/npr'); 
require('dotenv').config();

schedule.scheduleJob('35 7 * * *', async () => {

  console.log('Fetching yahoo data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  const vtsaxStockData = await fetchYahooStockTickerData('VTSAX')

  console.log('Fetching npr data -------------------')
  const nprTopStories = await nprFeed()
  const nprArchitectureStories = await nprFeed(rssConstants.nprCategories.architecture)
  const nprWorldStories = await nprFeed(rssConstants.nprCategories.world)
  const nprTechStories = await nprFeed(rssConstants.nprCategories.tech)

  console.log('Constructing email --------------------')
  const data = { 
    tslaStockData, 
    vtsaxStockData, 
    nprTopStories, 
    nprArchitectureStories,
    nprWorldStories,
    nprTechStories
  }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

