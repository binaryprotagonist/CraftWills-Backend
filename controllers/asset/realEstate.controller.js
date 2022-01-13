const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const RealEstateDataAccess= require("../../dal/asset/realEstate.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeEstate = async (req,res) => {
  const user = req.token_data._id
    const {address,country,specifyOwnershipType} = req.body;
    if (!address || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        address : req.body.address,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storeddata = await RealEstateDataAccess.storeEstate(data);
    if (storeddata){
    return {
      error: false,
      sucess: true,
      message: "RealEstate stored successfully",
      data: storeddata,
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


exports.getEstateDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await RealEstateDataAccess.findEstate({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Real Estate data Found Successfully",
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
