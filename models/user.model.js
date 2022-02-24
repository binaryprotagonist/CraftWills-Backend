// const { number, string } = require("joi");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  
  fullName : {
    type : String,

  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,

  },
  id_type: {
    type : String,
  },
  id_number : {
    type : String,

  },
  gender : {
    type : String,

  },
  floorNumber : {
    type : String,

  },
  unitNumber : {
    type : String,

  },
  streetName :{
    type : String,

  },
  postalCode : {
    type : Number,
  },
  id_country : {
    type : String,
    default : ""

  },
  dob : {
    type : String,
    default : " "
  },
  Citizenship : {
    type : String,
    default : ""
  },
  profileImage : {
    type : String,
    // default : "/uploads/defaultimage.png"
  },  
  memberPersonDetails : {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'MemberData'
  },
  subscription:{
    subscriptionId: { type: mongoose.Schema.Types.ObjectId , default:null},  
    subId: {type: String},
    // tempSubId: {type: String},
    priceId:{type:String, default:null},
    date: { type: Date },
    expiryDate: { type: Date },
    isActive: {type:Boolean},
  },
});

const User = mongoose.model("UserData", UserSchema);
module.exports = User;