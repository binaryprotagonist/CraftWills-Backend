const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../JsonWebToken/jwt");
const MemberDataAccess= require("../dal/member.person.dal")
const {myFunction} = require ("../nodemailer/nodemailer")

exports.createMember = async (req) => {
    const _id = req.token_data._id
    console.log ("the user id is "+_id)
    const {fullName,Relationship,dob,gender,country,id_type,id_number,floorNumber,unitNumber,streetName,postalCode} = req.body;
    if (!fullName || !Relationship || !dob || !gender| !country || !id_type || !id_number || !floorNumber || !unitNumber || !streetName || !postalCode) {
      // throw new ExpressError(401, "Bad request");
      console.log('err')
    }
    const data = {
      _id,
      user_id : _id,
      fullname : req.body.fullname,
      Relationship : req.body.Relationship,
      dob : req.body.dob,
      gender : req.body.gender,
      country : req.body.country,
      id_type : req.body.id_type,
      id_number : req.body.id_number,
      floorNumber : req.body.floorNumber,
      unitNumber : req.body.unitNumber,
      streetName : req.body.streetName,
      postalCode : req.body.postalCode
      
     };

    const storedMember = await MemberDataAccess.storeMember(data);
    if (storedMember){
    return {
      error: false,
      success: true,
      message: "Member created successfully",
      data: storedMember,
    }}
    else{
      return{
        error : true,
        success : false ,
        message : "something went wrong",
      }
    };
  }
  


exports.getMember = async (req, res) => {
    const users = await MemberDataAccess.findMember();
    return {
      error: false,
      sucess: true,
      message: "Member Found Successfully",
      data: {
        fullname : users.fullname,
        Relationship : users.Relationship,
        dob : users.dob,
        gender : users.gender,
        country : users.country,
        id_type : users.id_type,
        id_number : users.id_number,
        floorNumber : users.floorNumber,
        unitNumber : users.unitNumber,
        streetName : users.streetName,
        postalCode : users.postalCode
      }
    };
  };