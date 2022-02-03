const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const WillDataAccess= require("../../dal/Will/will.dal");
const Will = require ("../../models/Will/will.model");
const usersDataAccess= require("../../dal/user.dal");
const User = require("../../models/user.model");
const {myFunction} = require ("../../nodemailer/nodemailer");
const date = require ("date-and-time");

var count = 0
exports.storeWill = async (req,res) => {
  const _id = req.token_data._id
  const now = new Date()
  try {
    const data = new Will({
      user_id : _id,
      // Personal Information
      DATE : date.format(now, 'MM-DD-YYYY | HH:mm:ss'),
      willName : "My Will Version "+ count++,
      id_Number : req.body.id_Number,
      id_Type :  req.body.id_Type,
      fullName : req.body.fullName,
      gender : req.body.gender,
      email : req.body.email,
      floorNumber : req.body.floorNumber,
      unitNumber : req.body.unitNumber,
      streetName : req.body.streetName,
      postalCode : req.body.postalCode,
      assetScope : req.body.assetScope,
      // Appoint Primary Executor
      primary_executor_type : req.body.primary_executor_type,
      addPrimaryExecutor : req.body.primaryExecutors,
      // Appoint Replacement Executor
      replacement_executor_type : req.body.replacement_executor_type,
      addReplacementExecutor : req.body.replacementExecutors,
      // Appoint Guardian
      guardian_type : req.body.guardian_type,
      guardian_executor_type : req.body.guardian_executor_type,
      addGuardianExecutor : req.body.guardianExecutor,
      // Appoint Replacement Guardian
      guardian_replacement_executor_type : req.body.guardian_replacement_executor_type,
      addGuardianReplacementExecutor : req.body.guardianReplacementExecutor,
      // Distribution of Assets
      // Liabilities
      liabilities : req.body.liabilitiesData,
      // Assets
      assets : req.body.assets,
      // Trust
      trust : req.body.trust,
      // Distribute Residual Assets
      specifyResidualAssetBenificiary : req.body.specifyResidualAssetBenificiary,
      trustFallback : req.body.trustFallback,
      // Clauses 
      clauses : req.body.clauses
    })
    const savedData = await data.save();
    console.log(savedData);
    res.json({
      message : "Data has been saved successfully",
      success : true,
      data : savedData
    })
    
  } catch (err){
    res.json({
      message : "Error Found",
      Success : false,
      error : err.message
    })
  }
}


// Getting Business Details


exports.getWillDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await WillDataAccess.findWill(user);
  
return {
    error: false,
    success: true,
    message: "Will Found Successfully",
    data: {users}
  };
}


exports.pastVersions = async (req,res)=>{
  const user = req.token_data._id
  try {
  const users = await WillDataAccess.findWill(user)
  console.log(users)
  res.json({
    willName : users.willName,
    DATE : users.DATE
  })
} catch (err){
  res.json({
    message : "something went wrong",
    success : false,
    error : err.message
  })
}
}

// get a single will by its id;

exports.getWill = async(req,res)=>{
  try {
  const data = await Will.findById(req.params.id)
  res.json({
    message : "data found successfully",
    success : true,
    data : data
  })
  }catch(err){
    req.json({
      message : "something went wrong",
      success : false,
      error : err.message
    })
  }
}
// Update Bank Details

exports.UpdateWillData = async (req, res) => {
  const _id = req.params.id
  const updateData = {
    _id,
    toUpdate: {
      id_Number : req.body.id_Number,
      id_Type :  req.body.id_Type,
      fullName : req.body.fullName,
      gender : req.body.gender,
      email : req.body.email,
      floorNumber : req.body.floorNumber,
      unitNumber : req.body.unitNumber,
      streetName : req.body.streetName,
      postalCode : req.body.postalCode,
      assetScope : req.body.assetScope,
      // Appoint Primary Executor
      primary_executor_type : req.body.primary_executor_type,
      addPrimaryExecutor : req.body.primaryExecutors,
      // Appoint Replacement Executor
      replacement_executor_type : req.body.replacement_executor_type,
      addReplacementExecutor : req.body.replacementExecutors,
      // Appoint Guardian
      guardian_type : req.body.guardian_type,
      guardian_executor_type : req.body.guardian_executor_type,
      addGuardianExecutor : req.body.guardianExecutor,
      // Appoint Replacement Guardian
      guardian_replacement_executor_type : req.body.guardian_replacement_executor_type,
      addGuardianReplacementExecutor : req.body.guardianReplacementExecutor,
      // Distribution of Assets
      // Liabilities
      liabilities : req.body.liabilitiesData,
      // Assets
      assets : req.body.assets,
      // Trust
      trust : req.body.trust,
      // Distribute Residual Assets
      specifyResidualAssetBenificiary : req.body.specifyResidualAssetBenificiary,
      trustFallback : req.body.trustFallback,
      // Clauses 
      clauses : req.body.clauses
    },
  };
const update = await WillDataAccess.updateWill(updateData);
if (update){
  return {
    error: false,
    message: "Will data updated successfully",
    sucess: true,
    data: update,
  };
}
else {
return "something went wrong"
}
};