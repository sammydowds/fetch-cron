
module.exports = (polygonGroupResponse, tickers) => {
    let processedData = {}
    if (!!polygonGroupResponse['results']) {
        for (let dataObject of polygonGroupResponse.results) {
            console.log(dataObject)
            if (tickers.includes(dataObject.T)) {
                processedData[dataObject.T] = dataObject
            }
        }
    }
    return processedData
}