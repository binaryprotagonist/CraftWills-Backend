const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const privateDeptDataAccess= require("../../dal/liabilities/privateDept.dal")
const usersDataAccess= require("../../dal/user.dal")
const User = require("../../models/user.model")


const {myFunction} = require ("../../nodemailer/nodemailer")

exports.storePersonalDept = async (req,res) => {
  const user = req.token_data._id
    const {debt_Name,current_Outstanding_Amount,description} = req.body;
    if (!debt_Name || !current_Outstanding_Amount || !description) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
        user_id : user,
        dept_Name : req.body.dept_Name,
        current_Outstanding_Amount : req.body.current_Outstanding_Amount,
        description : req.body.description
    };
  
    const storeddept = await privateDeptDataAccess.storeDept(data);
    if (storeddept){
    return {
      error: false,
      sucess: true,
      message: "Private Department data stored successfully",
      data: storeddept,
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


exports.getDeptDetails = async (req, res) => {
  const user = req.token_data._id
  const users = await privateDeptDataAccess.findDept({user_id:user});
  
  return {
    error: false,
    sucess: true,
    message: "Private dept data Found Successfully",
    data: {users}
  };

};


// Update Bank Details

exports.UpdateLoanData = async (req, res) => {
  const _id = req.token_data._id
  const updateData = {
    _id,
    toUpdate: {
        loanName : req.body.loanName,
        loanProvider : req.body.loanProvider,
        loan_Number : req.body.loan_Number,
        loan_Id_Number : req.body.loan_Id_Number,
        current_Outstanding_Amount : req.body.current_Outstanding_Amount,
        description : req.body.description
    },
  };
const update = await privateDeptDataAccess.updateDept(updateData);
if (update){
  return {
    error: false,
    sucess: true,
    message: "Private dept data updated successfully",
    data: update,
  };
}
else {
return "something went wrong"
}
};