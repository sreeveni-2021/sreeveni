let config = new Object();

config = {
  // app: {
  //   port: process.env.APP_PORT,
  //   database: process.env.MONGODB_URL,
  //   apiKey : process.env.API_KEY
  // },
  app: {
    port:5000,
    database:"mongodb://localhost:27017/vithya",
    apiKey : process.env.API_KEY
  },
  mail:{
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    mailPort: process.env.MAIL_PORT,
    smtp: process.env.MAIL_SMTP
  }
};

module.exports = config;