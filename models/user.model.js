const { number, string } = require("joi");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({

  fullName : {
    type : String,
    required : true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  id_type: {
    type : String,
    required : true
  },
  id_number : {
    type : Number,
    required : true

  },
  gender : {
    type : String,
    required : true
  },
  floorNumber : {
    type : String,
    required : true
  },
  unitNumber : {
    type : String,
    required : true
  },
  streetName :{
    type : String,
    required : true
  },
  postalCode : {
    type : Number,
    required : true
  }
});

const User = mongoose.model("UserData", UserSchema);
module.exports = User;