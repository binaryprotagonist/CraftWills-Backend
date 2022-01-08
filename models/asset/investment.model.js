const mongoose = require("mongoose");
const investmentSchema = new mongoose.Schema({
  
  policyname : {
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
});

const Investment = mongoose.model("InvestmentData",investmentSchema);
module.exports = Investment;