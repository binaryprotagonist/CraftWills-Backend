const mongoose = require("mongoose");
const unSecuredLoanSchema = new mongoose.Schema({
  user_id : {
    type : String
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
  Type : {
    type : String,
    default : "Unsecured Loan"
  }
});

const UnSecureLoanSchema = mongoose.model("unSecuredLoanData", unSecuredLoanSchema);
module.exports = UnSecureLoanSchema;