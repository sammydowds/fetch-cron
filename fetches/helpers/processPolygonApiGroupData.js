
module.exports = (polygonGroupResponse, tickers) => {
    let processedData = {}
    if (!!polygonGroupResponse && !!polygonGroupResponse['results']) {
        for (let dataObject of polygonGroupResponse.results) {
            if (tickers.includes(dataObject.T)) {
                processedData[dataObject.T] = dataObject
            }
        }
    }
    return processedData
}