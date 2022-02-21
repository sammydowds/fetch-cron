const nodemailer = require('nodemailer')
const getDailyEmailHtml = require('./getDailyEmailHtml')

module.exports = (data) => {
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
      const html = getDailyEmailHtml(data)
      console.log('HTML rendered', html)
      let mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Daily Brief',
        html: html
      };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function(err) {
            if (err) {
              reject("Email was not sent")
            } else {
              resolve("Email was sent successfully")
            }
          });
        }
    )

}
