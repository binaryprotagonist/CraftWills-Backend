const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const BusinessDataAccess= require("../../dal/asset/business.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeBusiness = async (req,res) => {
  const user = req.token_data._id
    const {businessName,UEN_no,country,specifyOwnershipType} = req.body;
    if (!businessName || !UEN_no || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        businessName : req.body.businessName,
        UEN_no : req.body.UEN_no,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storedBusiness = await BusinessDataAccess.storeBusiness(data);
    if (storedBusiness){
    return {
      error: false,
      sucess: true,
      message: "bank account stored successfully",
      data: storedBusiness,
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


exports.getBusinessDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await BusinessDataAccess.findBusiness({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Bank Account Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateBusiness = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        businessName : req.body.businessName,
        UEN_no : req.body.UEN_no,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await BusinessDataAccess.updateBusiness(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "updated Business successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};