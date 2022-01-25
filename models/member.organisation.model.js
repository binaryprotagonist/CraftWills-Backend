const mongoose = require("mongoose");
const MemberOrganisationSchema = new mongoose.Schema({
  user_id : {
    type : String
  }
  ,
  organisationName : {
    type : String
  }
  ,
  registration_number : {
    type : String,
    required : true
  },
  id_country: {
    type: String, 
  },
  floorNumber : {
    type : String,
    required : true
  },
  unitNumber: {
    type : String,
    required : true
  },
  streetName : {
    type : String,
    required : true
  },
  postalCode : {
    type : String,
    required : true
  },
  Type : {
    type : String,
    default : "Organisation"
  }
});

const Member = mongoose.model("MemberOrganisationData", MemberOrganisationSchema);
module.exports = Member;