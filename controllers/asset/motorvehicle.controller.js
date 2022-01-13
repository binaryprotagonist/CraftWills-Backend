const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const MotorVehicleDataAccess= require("../../dal/asset/motorVehicle.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer");
const MotorVehicle = require("../../models/asset/motorVehicle.model");

exports.storeVehicle = async (req,res) => {
  const user = req.token_data._id
    const {CarModel,plateNo,country,specifyOwnershipType} = req.body;
    if (!CarModel|| !plateNo || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        CarModel : req.body.CarModel,
        plateNo : req.body.plateNo,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storeddata = await MotorVehicleDataAccess.storeVehicle(data);
    if (storeddata){
    return {
      error: false,
      sucess: true,
      message: "MotorVehicle stored successfully",
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


exports.getVehicleDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await MotorVehicleDataAccess.findVehicle({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Real Estate data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateVehicle = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        CarModel : req.body.CarModel,
        plateNo : req.body.plateNo,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await MotorVehicleDataAccess.updateVehicle(updateData);
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
