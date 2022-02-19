const schedule = require('node-schedule')
const http = require('https')
const nodemailer = require('nodemailer')
require('dotenv').config();

const FINANCE_KEY = process.env.YHOO_KEY

const yahooApiOptions = {
	"method": "GET",
	"hostname": "yfapi.net",
	"port": null,
	"path": "/v11/finance/quoteSummary/TSLA?modules=summaryDetail",
	"headers": {
		"x-api-key": FINANCE_KEY,
	}
};

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

schedule.scheduleJob('16 12 * * *', () => {
  console.log('Fetching data -------------------')
  const req = http.request(yahooApiOptions, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
      let mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Daily Brief',
        text: body.toString()
      };
      transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          console.log("Email sent successfully");
        }
      });
    });
  })
  req.end();
  console.log('Job done ------------------')
})

