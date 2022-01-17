const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const otherAssetsDataAccess= require("../../dal/asset/otherAssets.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer");
const SafeDeposit = require("../../models/asset/safeDepositBox.model");

exports.storeAsset = async (req,res) => {
  const user = req.token_data._id
    const {asset_name,id_No,country,specifyOwnershipType} = req.body;
    if (!asset_name || !id_No || !country || !specifyOwnershipType) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        asset_name : req.body.asset_name,
        id_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    };
  
    const storedAsset = await otherAssetsDataAccess.storeAsset(data);
    if (storedAsset){
    return {
      error: false,
      sucess: true,
      message: "Asset stored successfully",
      data: storedAsset,
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


exports.getAssetDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await otherAssetsDataAccess.findAsset({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Asset data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateAsset = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        asset_name : req.body.asset_name,
        id_No : req.body.safe_No,
        country : req.body.country,
        specifyOwnershipType : req.body.specifyOwnershipType
    },
  };
const update = await otherAssetsDataAccess.updateAsset(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "updated Asset successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};
