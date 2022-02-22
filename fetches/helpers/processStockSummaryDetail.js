
module.exports = (data) => {
    const stockData = data.quoteSummary.result[0].summaryDetail
    const twoHundredDayAverage = stockData.twoHundredDayAverage.fmt ? `$${stockData.twoHundredDayAverage.fmt}` : 'NA'
    const previousClose = stockData.regularMarketPreviousClose.fmt ? `$${stockData.regularMarketPreviousClose.fmt}` : 'NA'
    const currentOpen = stockData.regularMarketOpen.fmt ? `$${stockData.regularMarketOpen.fmt}` : 'NA'

    return {
        stockData,
        twoHundredDayAverage, 
        previousClose,
        currentOpen
    }
}