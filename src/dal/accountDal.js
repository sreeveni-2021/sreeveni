const userSchema = require("../models/user");
const customerDal = new Object();

customerDal.saveUser = async (data) => {
  try {
    data.createdAt = new Date().getTime()
    data.updatedAt = new Date().getTime()
    let customer = new userSchema(data);
    let result = await customer.save();
    if (result) {
      return { status: true, data: result };
    }
    return { status: false, data: result }
  } 
  catch (error) 
  {
    console.log("failed to save Users", error);
    return { status: false, data: error.message ? error.message : error }
  }
}

customerDal.findCustomerByEmailId = async (email) => {
  try {
    let result = await customerSchema.find({ email: email });
    if (result) {
      return { status: true, data: result }
    }
    return { status: false, data: result }
  } catch (error) {
    console.log("failed to fetch clogs", error);
    return { status: false, data: error.message ? error.message : error }
  }
}

module.exports = customerDal;