const mongoose = require("mongoose");
const investmentSchema = new mongoose.Schema({
  
  accountName : {
    type : String,
    required : true
  },
  accountNo: {
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
    default : "Investment Account"
  }
});

const Investment = mongoose.model("InvestmentData",investmentSchema);
module.exports = Investment;