const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const safeDepositDataAccess= require("../../dal/asset/safeDeposit.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer");
const SafeDeposit = require("../../models/asset/safeDepositBox.model");

exports.storeDeposit = async (req,res) => {
  const user = req.token_data._id
    const {safe_Box_Location,safe_No,country,specifyOwnershipType} = req.body;
    if (!safe_Box_Location || !safe_No || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        safe_Box_Location : req.body.safe_Box_Location,
        safe_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storedDeposit = await safeDepositDataAccess.storeDeposit(data);
    if (storedDeposit){
    return {
      error: false,
      sucess: true,
      message: "safeDeposit stored successfully",
      data: storedDeposit,
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


exports.getDepositDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await safeDepositDataAccess.findDeposit({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Safe Deposit data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateDeposit = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        safe_Box_Location : req.body.safe_Box_Location,
        safe_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await safeDepositDataAccess.updateDeposit(updateData);
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
