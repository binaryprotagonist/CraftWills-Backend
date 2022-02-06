const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const TrustDataAccess= require("../../dal/trust.dal")
const trust = require("../../models/trust.model")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")
const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeTrust = async (req,res) => {
  const user = req.token_data._id
  const creatTime = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
    const {trustName,description} = req.body;
    if (!trustName|| !description) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        isoDate: `${creatTime}T00:00:00Z`,
        trustName : req.body.trustName,
        description : req.body.description
    };
  
    const storedTrust = await TrustDataAccess.storeTrust(data);
    if (storedTrust){
    return {
      error: false,
      success: true,
      message: "Trust data stored successfully",
      data: storedTrust,
    }}
    else{
      return{
        error : true,
        success : false ,
        message : "something went wrong",
      }
    };
}

// Getting Business Details


exports.getTrustDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await TrustDataAccess.findTrust(ser);
  
  return {
    error: false,
    success: true,
    message: "Trust data Found Successfully",
    data: {users}
  };
}



// Update Bank Details

exports.UpdateTrustData = async (req, res) => {
  const _id = req.params.id
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
    success: true,
    message: "Trust data updated successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};


exports.filterTrust = async(req,res)=>{
  const data = await trust.find();
  const filters = {};
    if (req.body.type) {
      filters.type = req.body.type;
    }
    if (req.body.isoDate) {
      filters.isoDate = req.body.isoDate;
    }
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);

  }