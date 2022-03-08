// const getDailyEmailHtml = require('./getDailyEmailHtml')
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = (html) => {
      const msg = {
        to: [process.env.TO_EMAIL, process.env.BACKUP_EMAIL],
        from: process.env.FROM_EMAIL,
        subject: 'Daily Brief',
        html: html,
      }
    return new Promise((resolve, reject) => {
        sgMail.send(msg, function(err) {
            if (err) {
              console.log('ERROR HERE: ', err)
              console.log('Error body', err.response.body)
              reject("Email was not sent", err)
            } else {
              resolve("Email was sent successfully")
            }
          });
        }
    )

}
