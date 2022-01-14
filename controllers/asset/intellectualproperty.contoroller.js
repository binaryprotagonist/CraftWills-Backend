const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const intellectualPropertyDataAccess= require("../../dal/asset/intellectualproperty.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer");
const IntellectualProperty = require("../../models/asset/intellectualProperty.model");

exports.storeProperty = async (req,res) => {
  const user = req.token_data._id
    const {ip_Name,ip_No,country,specifyOwnershipType} = req.body;
    if (!ip_Name || !ip_No || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        ip_Name : req.body.ip_Name,
        ip_No : req.body.ip_No,
        country : req.body.country,
        SpecifyOwnershipType : req.body.SpecifyOwnershipType
    };
  
    const storedProperty = await intellectualPropertyDataAccess.storeProperty(data);
    if (storedProperty){
    return {
      error: false,
      sucess: true,
      message: "Property stored successfully",
      data: storedProperty,
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


exports.getPropertyDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await intellectualPropertyDataAccess.findProperty({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Intellectual Property data Found Successfully",
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
