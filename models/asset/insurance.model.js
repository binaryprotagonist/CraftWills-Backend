const mongoose = require("mongoose");
const InsuranceSchema = new mongoose.Schema({
  user_id : {
    type : String,
    },
  
  policyName : {
    type : String,
    required : true
  },
  policyNumber: {
    type: String,
    required: true,
    unique: true,
  },
  country : {
    type : String,
    required : true,
    default : "Singapore"
  },
  specifyOwnershipType : {
    type : String,
    required : true,
  },
  Type : {
    type : String,
    default : "Insurance Policy"
  }
});

const Insurance = mongoose.model("InsuranceData", InsuranceSchema);
module.exports = Insurance;