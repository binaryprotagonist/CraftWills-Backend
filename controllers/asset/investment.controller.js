const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const investmentAccountDataAccess= require("../../dal/asset/investment.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeInvestmentAccount = async (req,res) => {
  const user = req.token_data._id
    const {policyName,policyNumber,country,specifyOwnershipType} = req.body;
    if (!policyName || !policyNumber || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        policyName : req.body.policyName,
        policyNumber : req.body.policyNumber,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storedPolicy = await investmentAccountDataAccess.storePolicy(data);
    if (storedPolicy){
    return {
      error: false,
      sucess: true,
      message: "Policy stored successfully",
      data: storedPolicy,
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


exports.getInvestmentDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await investmentAccountDataAccess.findPolicy({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Investment account data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateInvestment = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
      policyName : req.body.bankname,
      policyNumber : req.body.accountNumber,
      country : req.body.country,
      specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await investmentAccountDataAccess.updatePolicy(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "updated Policy successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};
