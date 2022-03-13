const sendEmail = require('./sendEmail');
const renderToDesktopEmailHtml = require('./renderToDesktopEmailHtml')
const fetchAllData = require('../fetches/fetchAllData');
const processPolygonApiGroupData = require('../fetches/helpers/processPolygonApiGroupData')
const stocks = require('../fetches/stocks')

require('dotenv').config();

const generateAndSendEmail = async () => {
    const data = await fetchAllData()
    const processedPolygonGroupData = processPolygonApiGroupData(data.polygonStockData, stocks)
    const html = renderToDesktopEmailHtml({ ...data, processedPolygonGroupData })
    const emailSentMessage = await sendEmail(html)
    console.log(emailSentMessage)
}

module.exports = generateAndSendEmail()