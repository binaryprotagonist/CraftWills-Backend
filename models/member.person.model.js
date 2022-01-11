const mongoose = require("mongoose");
const MemberSchema = new mongoose.Schema({
  user_id : {
    type : String
  }
  ,
  fullname : {
    type : String,
    required : true
  },
  Relationship: {
    type: String, 
  },
  id_number : {
    type : String,
    required : true
  },
  id_type : {
    type : String,
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
  },
  country : {
    type : String,
    required : true,
    default : "Singapore"
  },
  dob : {
    type : String,
  },
  Citizenship : {
    type : String,
  }

});

const Member = mongoose.model("Memberdata", MemberSchema);
module.exports = Member;