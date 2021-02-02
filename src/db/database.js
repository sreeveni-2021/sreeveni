const mongoose = require('mongoose');
const config = require('../config/config');
const retryIntervalInMS = 5000;
const database = new Object();
const options = {
  useNewUrlParser: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useUnifiedTopology: true,
  useFindAndModify: false
};

database.establishConnection = async () => {
  const dburl = config.app.database;
  console.log("MongoDB connection initiated")

  await mongoose.connect(dburl, options)
    .then(() => { console.log("MongoDB connected successfully"); })
    .catch(err => {
      console.log(err.message ? err.message : "Mongodb connection error");
      console.log("MongoDB Connection Failed, retrying in " + retryIntervalInMS + " ms");
      setTimeout(establishConnection, retryIntervalInMS);
    });
};

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose connection closed successfully");
    process.exit(0);
  });
});

module.exports = database;