const mongoose = require("mongoose");
const SecuredLoanSchema = new mongoose.Schema({
  user_id : {
    type : String
  }
  ,
  loanName : {
    type : String,
    required : true
  }
  ,
  loanProvider : {
    type : String,
    required : true
  },
  loan_Number: {
    type: String,
    required : true 
  },
  loan_Id_Number : {
    type : Number,
    required : true
  },
  current_Outstanding_Amount: {
    type : String,
    required : true
  },
  description :{
    type : String
  },
  addAssets : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "BankData"
    }
  ],
  Type : {
    type : String,
    default : "Secured Loan"
  }
});

const LoanSchema = mongoose.model("SecuredLoanData", SecuredLoanSchema);
module.exports = LoanSchema;