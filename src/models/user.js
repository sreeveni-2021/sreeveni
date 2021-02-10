const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  Name:
   { type: String ,
     required:true
 },
  Age:
   {
   type: Number,
  required:true, 
  default:  0, 
  validate(value) { 
    if (value  <  0) { 
      throw  new  Error('Age must be a positive number') 
    }
  }

},   

  Gender: { 
    type: String,
  required:true
 },
 Qualification: 
  { 
    type: String,
  required:true
 },
  Phonenumber: {
     type: String,
    required:true
  },
  Email:
   { 
     type: String,
    required:true,
    trim:  true,
    lowercase:  true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw  new  Error('Email is invalid')
      }
    }
   },
  Password: 
  {
     type: String,
    required:true,
     minlength:  6, 
    trim:  true,
    validate(value) 
    {
      if (value.toLowerCase().includes('password')) { 
        throw  new  Error('Password cannot contain "password"') 
      } 
    } 
   },
   Nationality: 
  { 
  type: String,
  required:true
 },
  Address: 
  { 
    type: String,
  required:true
 },
 
 Postalcode: 
  {
     type: String,
    required:true
  },
  createdAt: 
  { 
    type: Date,
    default:Date.now()
   },
  updatedAt: { type: Date }
});
module.exports = mongoose.model('user', userSchema);


/*********                              okkkkkkkkkkkkk       */