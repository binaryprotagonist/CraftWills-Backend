const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const asset = require("../../models/asset/assets.model")
const AssetsDataAccess = require("../../dal/asset/assets.dal")
const usersDataAccess = require("../../dal/user.dal")
const User = require("../../models/user.model")


const { myFunction } = require("../../nodemailer/nodemailer")

const storeAssets = async (req, res) => {
    const user = req.token_data._id
    try {
        console.log(req.body.bankAccount.bankname)
    const Asset = new asset({
        user_id: user,
        country: req.body.country,
        specifyOwnershipType: req.body.specifyOwnershipType,
        bankAccount:
       {
            bankname: req.body.bankAccount.bankname,
            accountNumber: req.body.bankAccount.accountNumber,
            estimateValue: req.body.bankAccount.estimateValue
        },
        business: {
            businessName: req.body.business?.businessName,
            UEN_no: req.body.business?.UEN_no
        },
        insurancePolicy: {
            policyName: req.body.insurancePolicy?.policyName,
            policyNumber: req.body.insurancePolicy?.policyNumber
        },
        intellectualProperty: {
            ip_Name: req.body.intellectualProperty?.ip_Name,
            ip_No: req.body.intellectualProperty?.ip_No
        },
        investmentAccount: {
            accountName: req.body.investmentAccount?.accountName,
            accountNo: req.body.investmentAccount?.accountNo
        },
        motorVehicle : {
            CarModel : req.body.motorVehicle?.CarModel,
            plateNo : req.body.motorVehicle?.plateNo
        },
        otherAssets : {
            asset_name : req.body.otherAssets?.asset_name,
            id_No : req.body.otherAssets?.id_No
        },
        personalPossession : {
            Name : req.body.personalPossession?.Name,
            id_No : req.body.personalPossession?.id_No
        },
        realEstate : {
            address: req.body.realEstate?.address,
        },
        safeDepositBox : {
            safe_Box_Location : req.body.safeDepositBox?.safe_Box_Location,
            safe_No: req.body.safeDepositBox?.safe_No
        }
    })

    const savedAsset = await Asset.save()
    res.json({
        success : true,
        message : "Asset saved",
        data : savedAsset
        
    })
    }
    catch (err) {
        res.json({
            success : true ,
            message :err.message,
            error : err
        })
    }

}

const getAssets = async (req,res)=> {
    try{
    const assetData = await asset.find()
    res.json({
        success : true,
        message : "Data found successfully",
        data : assetData
    })
    }
    catch (err) {
        res.json({
            success : false,
            message : "Something went wrong",
            error : err
        })
    }
}


const updateAssets = async (req, res) => {
    const _id = req.token_data._id
    const updateData = {
      _id,
      toUpdate: {
        country: req.body.country,
        specifyOwnershipType: req.body.specifyOwnershipType,
        bankAccount:
       {
            bankname: req.body.bankAccount.bankname,
            accountNumber: req.body.bankAccount.accountNumber,
            estimateValue: req.body.bankAccount.estimateValue
        },
        business: {
            businessName: req.body.business?.businessName,
            UEN_no: req.body.business?.UEN_no
        },
        insurancePolicy: {
            policyName: req.body.insurancePolicy?.policyName,
            policyNumber: req.body.insurancePolicy?.policyNumber
        },
        intellectualProperty: {
            ip_Name: req.body.intellectualProperty?.ip_Name,
            ip_No: req.body.intellectualProperty?.ip_No
        },
        investmentAccount: {
            accountName: req.body.investmentAccount?.accountName,
            accountNo: req.body.investmentAccount?.accountNo
        },
        motorVehicle : {
            CarModel : req.body.motorVehicle?.CarModel,
            plateNo : req.body.motorVehicle?.plateNo
        },
        otherAssets : {
            asset_name : req.body.otherAssets?.asset_name,
            id_No : req.body.otherAssets?.id_No
        },
        personalPossession : {
            Name : req.body.personalPossession?.Name,
            id_No : req.body.personalPossession?.id_No
        },
        realEstate : {
            address: req.body.realEstate?.address,
        },
        safeDepositBox : {
            safe_Box_Location : req.body.safeDepositBox?.safe_Box_Location,
            safe_No: req.body.safeDepositBox?.safe_No
        }
      },
    };
  const update = await AssetsDataAccess.updateAsset(updateData);
  if (update){
    return {
      error: false,
      sucess: true,
      message: "Assets data updated successfully",
      data: update,
    };
  }
  else {
  return "something went wrong"
  }
  };
module.exports = {storeAssets,getAssets,updateAssets}