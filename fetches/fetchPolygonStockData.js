const http = require('https');

module.exports = (date) => {
    const yahooPolygonOptions = {
        "method": "GET",
        "hostname": "api.polygon.io",
        "port": null,
        "path": `/v2/aggs/grouped/locale/us/market/stocks/${date}`,
        "headers": {
            "Authorization": `Bearer ${process.env.POLYGON_IO_API_KEY}`,
        }
    };
    return new Promise(function(resolve, reject) { 
        const req = http.request(yahooPolygonOptions, function(res) {
            const chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                const body = Buffer.concat(chunks);
                resolve(JSON.parse(body.toString()))
            });
        })
        req.on("error", (err) => {
            reject(err)
        })
        req.end()
    })
}