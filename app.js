const schedule = require('node-schedule');
const http = require('https')
require('dotenv').config();

const FINANCE_KEY = process.env.YHOO_KEY

const options = {
	"method": "GET",
	"hostname": "yfapi.net",
	"port": null,
	"path": "/v11/finance/quoteSummary/TSLA?modules=summaryDetail",
	"headers": {
		"x-api-key": FINANCE_KEY,
	}
};

schedule.scheduleJob('5 8 * * *', () => {
  console.log('Fetching data -------------------')
  const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
  console.log('Job done ------------------')
})

