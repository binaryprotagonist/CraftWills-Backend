const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../JsonWebToken/jwt");
const MemberDataAccess= require("../dal/member.organisation.dal")
const {myFunction} = require ("../nodemailer/nodemailer");
const Member = require("../models/member.organisation.model");

exports.createMember = async (req) => {
  const _id = req.token_data._id
  console.log(_id)
  const { organisationName,registration_number,id_country,floorNumber,unitNumber,streetName,postalCode} = req.body;
  if ( !organisationName || !registration_number||!id_country || !floorNumber || !unitNumber || !streetName || !postalCode) {
    // throw new ExpressError(401, "Bad request");
    console.log('err')
  }
  // const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const data = {
    user_id : _id,
    organisationName: req.body.organisationName,
      registration_number: req.body.registration_number,
      id_country: req.body.id_country,
      floorNumber: req.body.floorNumber,
      unitNumber: req.body.unitNumber,
      streetName: req.body.streetName,
      postalCode: req.body.postalCode,
   };

  const storedUser = await MemberDataAccess.storeMember(data);
  if (storedUser){
  return {
    error: false,
    sucess: true,
    message: "Member Organisation Created Successfully",
    data: storedUser,
  }}
  else{
    return{
      error : true,
      sucess : false ,
      message : "something went wrong",
    }
  };
}


exports.getMember = async (req, res) => {
  const user_id = req.token_data._id
  console.log(user_id)
  const member = await Member.find({user_id:user_id})

   
    // const users = await MemberDataAccess.findMember(user_id);
    return {
      error: false,
      sucess: true,
      message: "Organisation Found Successfully",
      data: 
        member
    };
  };