const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const MotorVehicleDataAccess= require("../../dal/asset/motorVehicle.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model");
const MotorVehicle = require("../../models/asset/motorVehicle.model");


exports.storeVehicle = async (req,res) => {
  const user = req.token_data._id
    const {CarModel,plateNo,country ,SpecifyOwnershipType} = req.body;
    if (!CarModel || !plateNo || !country || !SpecifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        CarModel : req.body.CarModel,
        plateNo : req.body.plateNo,
        country : req.body.country,
        SpecifyOwnershipType : req.body.SpecifyOwnershipType
    };
  
    const storedVehicle = await MotorVehicleDataAccess.storeVehicle(data);
    if (storedVehicle){
    return {
      error: false,
      sucess: true,
      message: "Vehicle stored successfully",
      data: storedVehicle,
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
    message: "Motor Vehicle data Found Successfully",
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
      SpecifyOwnershipType : req.body.SpecifyOwnershipType
    },
  };
const update = await MotorVehicleDataAccess.updateVehicle(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "Motor Vehicle data update successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};
