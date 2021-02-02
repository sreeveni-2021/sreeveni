const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneCode: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date }
})

module.exports = mongoose.model('user', userSchema);