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
  loan_Id_Number :{
    type : String,
    required : true
 }
  ,
  loan_number : {
    type : String,
    required : true
  },
  loan_Id: {
    type: String, 
    required : true
  },
  current_Outstanding_Amount : {
    type : String,
    required : true
  },
  description: {
    type : String,
  },

});

const UnsecuredLoanSchema = mongoose.model("UnSecuredLoanData", unSecuredLoanSchema);
module.exports = UnsecuredLoanSchema;