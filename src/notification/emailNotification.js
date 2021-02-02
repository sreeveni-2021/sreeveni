"use strict";

const config = require('../config/config');
const nodemailer = require("nodemailer");


module.exports = {
    sendEmail: async (req, url) => {
        let transporter = nodemailer.createTransport({
            host: config.mail.smtp,
            port: config.mail.mailPort,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.mail.username, // generated ethereal user
                pass: config.mail.password, // generated ethereal password
              },
    });
      let info = await transporter.sendMail({
        from: `"Trip Payment" <${config.mail.username}>`, // sender address
        to: req.email, // list of receivers
        subject: "Payment Notification", // Subject line
        text: `Click the following url to redirect to payment ${url}`, // plain text body
      });
      return info
    },
  
  };
  