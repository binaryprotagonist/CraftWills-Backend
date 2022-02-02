const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const asset = require("../../models/asset/assets.model")
const AssetsDataAccess = require("../../dal/asset/assets.dal")
const usersDataAccess = require("../../dal/user.dal")
const User = require("../../models/user.model")
const moment = require ("moment-timezone")
const liabilities = require ("../../models/liabilities/liabilities.model")

const { myFunction } = require("../../nodemailer/nodemailer")

const storeAssets = async (req, res) => {
    const user = req.token_data._id
    const creatTime = moment().tz("Asia/Kolkata").format("2010-11-30");
    // const creatTime ="2010-11-30";
    try {
        console.log(req.body.bankAccount.bankname)
    const Asset = new asset({
        user_id: user,
        country: req.body.country,
        specifyOwnershipType: req.body.specifyOwnershipType,
        isoDate: `${creatTime}T00:00:00Z `,
        bankAccount:
       {
            bankname: req.body.bankAccount?.bankname,
            accountNumber: req.body.bankAccount?.accountNumber,
            estimateValue: req.body.bankAccount?.estimateValue,
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


const totalAssetsAmount = async(req,res)=>{
     
    const aggCursor = await asset.aggregate([
        {
          $match: {
            user_id: req.token_data._id
          }
        }, {
          $group: {
            _id: '$user_id', 
            total: {
              $sum : '$bankAccount.estimateValue'
            }
          }
        }
      ]);
   
    aggCursor.forEach(function (item, index) {
    console.log(item.total)
    res.json(item.total)   
});
}

const totalNetWorth = async(req,res)=>{
    const aggCursor1 = await asset.aggregate([
        {
          $match: {
            user_id: req.token_data._id
          }
        }, {
          $group: {
            _id: '$user_id', 
            total: {
              $sum : '$bankAccount.estimateValue'
            }
          }
        }
      ])
    const aggCursor2 = await liabilities.aggregate([
        {
          $match: {
            user_id: req.token_data._id
          }
        }, {
          $group: {
            _id: '$user_id', 
            total: {
              $sum: '$privateDept.current_Outstanding_Amount'
            }
          }
        }
      ])
     var a=0;
     var b=0;
     aggCursor1.forEach(function (item, index) {
         const agg1= item.total;
         a+=agg1;
     });
     aggCursor2.forEach(function(item,index){
         const agg2 = item.total;
         b+=agg2;
     })  
    res.json({
        message : "Total Net Worth",
        amount : b-a
    })
    console.log(b-a)    
}



const getAssetsMonthly = async (req,res)=> {
  try{
    let changeMonth = moment(`2022-03-01`).format();
    // let changeMonth = "2022-02-01";
    const date = moment(changeMonth).add(1, 'month').format();
    // const date = "2022-03-01";
    console.log(changeMonth)
    console.log(date)
  const assetData = await AssetsDataAccess.findAssetsMonthly({
      fromDate: `${changeMonth}`,
      endDate: `${date}`
  })
  if(assetData){
    console.log(assetData)
  }
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
          error : err.message
      })
  }
}




module.exports = {storeAssets,getAssetsMonthly,updateAssets,totalAssetsAmount,totalNetWorth,getAssets}