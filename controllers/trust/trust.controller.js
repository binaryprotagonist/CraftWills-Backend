const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const TrustDataAccess= require("../../dal/trust.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")
const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeTrust = async (req,res) => {
  const user = req.token_data._id
    const {trustName,description} = req.body;
    if (!trustName|| !description) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        trustName : req.body.trustName,
        description : req.body.description
    };
  
    const storedTrust = await TrustDataAccess.storeTrust(data);
    if (storedTrust){
    return {
      error: false,
      sucess: true,
      message: "Trust data stored successfully",
      data: storedTrust,
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


exports.getTrustDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await TrustDataAccess.findTrust(user);
  
  return {
    error: false,
    sucess: true,
    message: "Trust data Found Successfully",
    data: {users}
  };
}



// Update Bank Details

exports.UpdateTrustData = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        trustName : req.body.trustName,
        description : req.body.description
    },
  };
const update = await TrustDataAccess.updateTrust(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "Trust data updated successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};