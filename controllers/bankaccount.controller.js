const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../JsonWebToken/jwt");
const BankDataAccess= require("../dal/bankaccount.dal")
const {myFunction} = require ("../nodemailer/nodemailer")



exports.storeBank = async (req) => {
    const {bankname,accountNumber,country,estimateValue,specifyOwnershipType} = req.body;
    if (!bankname || !accountNumber || !country || !estimateValue || !specifyOwnershipType ) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
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
  