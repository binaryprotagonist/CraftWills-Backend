const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const SecuredLoanDataAccess= require("../../dal/liabilities/securedLoan.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeLoan = async (req,res) => {
  const user = req.token_data._id
    const {loanName,loanProvider,loan_Number,loan_Id_Number,current_Outstanding_Amount,description,addAssets} = req.body;
    if (!loanName || !loanProvider || !loan_Number || !loan_Id_Number || !current_Outstanding_Amount || !description || !addAssets) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        loanName : req.body.loanName,
        loanProvider : req.body.loanProvider,
        loan_Number : req.body.loan_Number,
        loan_Id_Number : req.body.loan_Id_Number,
        current_Outstanding_Amount : req.body.current_Outstanding_Amount,
        description : req.body.description,
        addAssets : req.body.addAssets
    };
  
    const storedLoan = await SecuredLoanDataAccess.storeLoan(data);
    if (storedLoan){
    return {
      error: false,
      sucess: true,
      message: "Loan Details stored successfully",
      data: storedLoan,
    }}
    else{
      return{
        error : true,
        sucess : false ,
        message : "something went wrong",
      }
    };
}

// Getting Business Details


exports.getLoanDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await SecuredLoanDataAccess.findLoan({user_id:user});
return {
    error: false,
    sucess: true,
    message: "loan data Found Successfully",
    data: {users}
  };
};


// Update Bank Details

exports.UpdateLoanData = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        loanName : req.body.loanName,
        loanProvider : req.body.loanProvider,
        loan_Number : req.body.loan_Number,
        loan_Id_Number : req.body.loan_Id_Number,
        current_Outstanding_Amount : req.body.current_Outstanding_Amount,
        description : req.body.description
    },
  };
const update = await SecuredLoanDataAccess.updateLoan(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "Loan data updated successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};