const http = require('https')

module.exports = (ticker) => {
    const yahooApiOptions = {
        "method": "GET",
        "hostname": "yfapi.net",
        "port": null,
        "path": `/v11/finance/quoteSummary/${ticker}?modules=summaryDetail`,
        "headers": {
            "x-api-key": process.env.YHOO_KEY,
        }
    };
    return new Promise(function(resolve, reject) { 
        const req = http.request(yahooApiOptions, function(res) {
            const chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                const body = Buffer.concat(chunks);
                resolve(body.toString())
            });
        })
        req.on("error", (err) => {
            reject(err)
        })
        req.end()
    })
}