const schedule = require('node-schedule');
const sendEmail = require('./actions/sendEmail');
const fetchYahooStockTickerData = require('./fetches/fetchYahooStockTickerData');
require('dotenv').config();

schedule.scheduleJob('37 8 * * *', async () => {
  console.log('Fetching data -------------------')
  const tslaStockData = await fetchYahooStockTickerData('TSLA')
  const vtsaxStockData = await fetchYahooStockTickerData('VTSAX')
  console.log('Stock data fetched')
  const data = { tslaStockData, vtsaxStockData }
  const emailSentMessage = await sendEmail(data)
  console.log(emailSentMessage)
})

