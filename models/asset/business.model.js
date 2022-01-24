const mongoose = require("mongoose");
const BusinessSchema = new mongoose.Schema({
  user_id : {
    type : String,
    },
  businessName :{
    type : String,
    required : true
  },
  UEN_no : {
    type : String
  },
  country : {
    type : String,
    default : "Singapore",
    required : true
  },
  specifyOwnershipType : {
    type : String,
    required : true
  },
  Type : {
    type : String,
    default : "Business"
  }
});

const Business = mongoose.model("BusinessData", BusinessSchema);
module.exports = Business;