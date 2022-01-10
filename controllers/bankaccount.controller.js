const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../JsonWebToken/jwt");
const BankDataAccess= require("../dal/bankaccount.dal")
const usersDataAccess= require("../dal/user.dal")
const User = require("../models/user.model")

const {myFunction} = require ("../nodemailer/nodemailer")

exports.storeBank = async (req,res) => {
  const user = req.token_data._id
    const {bankname,accountNumber,country,estimateValue,specifyOwnershipType} = req.body;
    if (!bankname || !accountNumber || !country || !estimateValue || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        bankname : req.body.bankname,
        accountNumber : req.body.accountNumber,
        country : req.body.country,
        estimateValue : req.body.estimateValue,
        specifyOwnershipType : req.body.specifyOwnershipType

     };
  
    const storedBank = await BankDataAccess.storeBank(data);
    if (storedBank){
    return {
      error: false,
      sucess: true,
      message: "bank account stored successfully",
      data: storedBank,
    }}
    else{
      return{
        error : true,
        sucess : false ,
        message : "something went wrong",
      }
    };
}

// Getting Bank Details


exports.getBankDetails = async (req, res) => {
  const users = await BankDataAccess.findBank(req.params._id);
  
  return {
    error: false,
    sucess: true,
    message: "User Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateBank = async (req, res) => {
  const updateData = {
    
    toUpdate: {
      bankname : req.body.bankname,
      accountNumber : req.body.accountNumber,
      country : req.body.country,
      estimateValue : req.body.estimateValue,
      specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await BankDataAccess.updateBank(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "updated Bank successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};