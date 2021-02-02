const accountController = new Object();
const appHelper = require("../helpers/appHelper");
const validator = require('../helpers/validator');
const accDal = require("../dal/accountDal");
const mailNotify = require("../notification/emailNotification");

accountController.login = async (req) => {
  try {
    const validatePayload = await validator.requestPaymentValidator(req.body);
    if (!validatePayload.status) {
      return appHelper.apiResponse(400, false, "Invalid payload", validatePayload.message);
    }
    var findUser =  await accDal.findCustomerByEmailId(req.body.userDetails.email);
    let paymentData =req.body.paymentDetails
    if((findUser.data).length == 0){
      var saveUserData =  await accDal.saveUser(req.body.userDetails);
      paymentData.userId = saveUserData.data.id
    }else{
      paymentData.userId = findUser.data[0].id
    }
    await mailNotify.sendEmail(req.body.userDetails, serviceResponseObject.body.url )
    return appHelper.apiResponse(200, true, "Sucess", serviceResponseObject.body);
      
  } catch (error) {
    console.log(" Failed", error);
    return appHelper.apiResponse(
      500,
      false,
      error.message ? error.message : "internal server error"
    );
  }
};


module.exports = accountController;
