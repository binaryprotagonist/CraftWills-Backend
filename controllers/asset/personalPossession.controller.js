const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const personalPossesionDataAccess= require("../../dal/asset/personalPossession.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer");
const SafeDeposit = require("../../models/asset/safeDepositBox.model");

exports.storePossession = async (req,res) => {
  const user = req.token_data._id
    const {Name,id_No,country,specifyOwnershipType} = req.body;
    if (!Name || !id_No || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        Name : req.body.Name,
        id_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storedPossession = await personalPossesionDataAccess.storePossession(data);
    if (storedPossession){
    return {
      error: false,
      sucess: true,
      message: "Policy stored successfully",
      data: storedPossession,
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


exports.getPossessionDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await personalPossesionDataAccess.findPossession({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "personal possesion data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdatePossession = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        Name : req.body.Name,
        id_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await personalPossesionDataAccess.updatePossession(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "updated Posession successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};
