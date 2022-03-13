const schedule = require('node-schedule');
const generateAndSendEmail = require('./actions/generateAndSendEmail')

require('dotenv').config();

schedule.scheduleJob('5 4 * * *', async () => {
  await generateAndSendEmail()
})

