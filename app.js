const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
const nprFeed = require('./fetches/rss/npr'); 
require('dotenv').config();

schedule.scheduleJob('37 9 * * *', async () => {
  console.log('Fetching data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  const vtsaxStockData = await fetchYahooStockTickerData('VTSAX')
  const nprTopStories = await nprFeed()
  const data = { tslaStockData, vtsaxStockData, nprTopStories }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

