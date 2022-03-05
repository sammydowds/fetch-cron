
module.exports = (polygonGroupResponse, tickers) => {
    console.log('GROUP RESPONSE', polygonGroupResponse)
    let processedData = {}
    for (let dataObject of polygonGroupResponse.results) {
        console.log(dataObject)
        if (tickers.includes(dataObject.T)) {
            processedData[dataObject.T] = dataObject
        }
    }
    return processedData
}