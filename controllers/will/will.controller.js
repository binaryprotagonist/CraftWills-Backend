const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const WillDataAccess= require("../../dal/Will/will.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")
const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storeWill = async (req,res) => {
  const user = req.token_data._id
    const {id_Number,id_Type,fullName,gender,email,floorNumber,unitNumber,streetName,postalCode,assetScope,appoint_Primary_Executor,appoint_Replacement_Executor,appoint_Guardian,appoint_Replacement_Guardian,liabilities,Assets,Trust, specify_Gift_Benificiaries , specify_Replacement_Benificiaries , Fallback , additional_Clauses , recommended_Advisor , appoint_Advisor , final_Words , translation , custom_Clause , specify_Residual_Asset_Benificiaries } = req.body;
    if (!id_Number|| !id_Type || !fullName || !gender || !email || !floorNumber || !unitNumber || !streetName || !postalCode || !assetScope || !appoint_Primary_Executor || !appoint_Replacement_Executor || !appoint_Guardian || !appoint_Replacement_Guardian || !liabilities || !Assets || !Trust || !specify_Gift_Benificiaries || !Fallback || !additional_Clauses || !recommended_Advisor ||!appoint_Advisor ||!final_Words ||!translation ||!custom_Clause ||!specify_Residual_Asset_Benificiaries) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const appointPE = {
      executor_type: appoint_Primary_Executor.executor_type,
      addExecutor : appoint_Primary_Executor.memberIds
    }
    const appointRE = {
      executor_type : appoint_Replacement_Executor.executor_type,
      addExecutor : appoint_Replacement_Executor.memberIds
    }
    const appointGuardian  = {
      guardian_type : appoint_Guardian.guardian_type,
      executor_type : appoint_Guardian.executor_type,
      addExecutor : appoint_Guardian.memberIds
    }
    const appointRG = {
      executor_type : appoint_Replacement_Guardian.executor_type,
      addExecutor : appoint_Replacement_Guardian.memberIds
    }

    const Addliabiliies = {
      addSecuredLoanData : liabilities.secureLoanIds,
      addUnsecuredLoanData : liabilities.unsecuredLoanIds,
      addPrivateDeptData : liabilities.privateDeptIds
    }
    const AddAssets = {
      BankData : Assets.bankDataId,
      BusinessData : Assets.businessDataId,
      InsuranceData : Assets.insuranceDataId,
      intellectualPropertyData : Assets.intellectualPropertyId,
      MotorVehicleData : Assets.motorVehicleId,
      OtherAssetsData : Assets.otherAssetsId,
      PersonalPossessionData : Assets.personalPossessionId,
      RealEstateData : Assets.realEstateIds,
      SafeDepositData : Assets.SafeDepositIds
    }
    const AddTrust = {
      addTrust : Trust.trustId
    }
    const specifyRab  = {
      addMember : specify_Residual_Asset_Benificiaries.memberIds,
      specify_Shares : specify_Residual_Asset_Benificiaries.specify_Shares
    }
    const trustFb = {
      fallback_Type : trust_Fallback.fallback_Type,
      split_Equally : trust_Fallback.split_Equally,
      addMember : trust_Fallback.memberIds

    }
    const additionalCl = {
      managedBy : additional_Clauses.managedBy,
      age_validity : additional_Clauses.age_validity,
      appoint_Benificiaries : additional_Clauses.memberIds
    }
    const recommendedAdvisor = {
      advisor_Name : recommended_Advisor.advisor_Name,
      contact_Number : recommended_Advisor.contact_Number,
      expertise : recommended_Advisor.expertise
    }
    const appointAdvisor = {
      advisor_Name : appoint_Advisor.advisor_Name,
      contact_Number : appoint_Advisor.contact_Number,
      expertise : appoint_Advisor.expertise
    }
    const data = {
        user_id : user,
        id_Number : req.body.id_Number,
        id_Type : req.body.id_Type,
        fullName : req.body.fullName,
        gender : req.body.gender,
        email : req.body.email,
        floorNumber : req.body.floorNumber,
        unitNumber : req.body.unitNumber,
        streetName : req.body.streetName,
        postalCode : req.body.postalCode,
        assetScope : req.body.assetScope,
        appoint_Primary_Executor : appointPE,
        appoint_Replacement_Executor : appointRE,
        appoint_Guardian :appointGuardian,
        appoint_Replacement_Guardian : appointRG,
        liabilities :Addliabiliies,
        Assets : AddAssets,
        addBankData : AddAssets.BankData,
        Trust : AddTrust,
        specify_Residual_Asset_Benificiaries : specifyRab,
        trust_Fallback : trustFb,
        additional_Clauses : additionalCl,
        recommended_Advisor : recommendedAdvisor,
        appoint_Advisor : appointAdvisor,
        final_Words : req.body.final_Words,
        translation : req.body.translation,
        custom_Clause : req.body.custom_Clause
    };
  
    const storedWill = await WillDataAccess.storeWill(data);
    if (storedWill){
    return {
      error: false,
      success: true,
      message: "Will Created successfully",
      data: storedWill,
    }}
    else{
      return{
        error : true,
        success : false ,
        message : "something went wrong",
      }
    };
}

// Getting Business Details


exports.getWillDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await WillDataAccess.findWill(user);
  
  return {
    error: false,
    sucess: true,
    message: "Will Found Successfully",
    data: {users}
  };
}



// Update Bank Details

exports.UpdateWillData = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
      id_Number : req.body.id_Number,
      id_Type : req.body.id_Type,
      fullName : req.body.fullName,
      gender : req.body.gender,
      email : req.body.email,
      floorNumber : req.body.floorNumber,
      unitNumber : req.body.unitNumber,
      streetName : req.body.streetName,
      postalCode : req.body.postalCode,
      assetScope : req.body.assetScope,
      appoint_Primary_Executor : appointPE,
      appoint_Replacement_Executor : appointRE,
      appoint_Guardian :appoint_Guardian,
      appoint_Replacement_Guardian : appointRG,
      liabilities :Addliabiliies,
      Assets : AddAssets,
      addBankData : AddAssets.BankData,
      Trust : AddTrust,
      specify_Residual_Asset_Benificiaries : specifyRab,
      trust_Fallback : trustFb,
      additional_Clauses : additionalCl,
      recommended_Advisor : recommendedAdvisor,
      appoint_Advisor : appointAdvisor,
      final_Words : req.body.final_Words,
      translation : req.body.translation,
      custom_Clause : req.body.custom_Clause
    },
  };
const update = await WillDataAccess.updateWill(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "Will data updated successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};