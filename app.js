const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
require('dotenv').config();

schedule.scheduleJob('10 8 * * *', async () => {
  console.log('Fetching data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  console.log('Data fetched: ', tslaStockData)
  const emailSentMessage = await sendEmail(tslaStockData)
  console.log(emailSentMessage)
})

