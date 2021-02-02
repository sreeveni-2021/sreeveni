var ObjectId = require('mongodb').ObjectID
var id = new ObjectId();
const curlHelper = require('../helpers/curlHelper');
const config = require('../config/config');

module.exports = {
  apiResponse: ( resStatusCode = 200, resStatus = true, resMessageKey = "",  resData = {}  ) => {
    return {
      code: resStatusCode,
      status: resStatus,
      message: resMessageKey,
      data: resData,
    };
  }

};
