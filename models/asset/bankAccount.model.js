const mongoose = require("mongoose");
const BankSchema = new mongoose.Schema({
  user_id : {
    type : String,
    }
  ,
  bankname : {
    type : String,
    required : true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  country : {
    type : String,
    required : true,
    default : "Singapore"
  },
  estimateValue : {
    type : String,
    required : true,
  },
  specifyOwnershipType :{
    type : String,
    required : true
  },
  Type : {
    type : String,
    default : "Bank Account"

  }
});

const Bank = mongoose.model("BankData", BankSchema);
module.exports = Bank;