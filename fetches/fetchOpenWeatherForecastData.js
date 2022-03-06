const http = require('https');

module.exports = (lat, lon, cnt) => {
    const openWeatherOptions = {
        "method": "GET",
        "hostname": "api.openweathermap.org",
        "port": null,
        "path": `/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    };
    return new Promise(function(resolve, reject) { 
        const req = http.request(openWeatherOptions, function(res) {
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