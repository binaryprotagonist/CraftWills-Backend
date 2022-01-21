const bcrypt = require("bcrypt");
// const momen = require("moment-timezone");
require("dotenv").config();
// const ExpressError = require("../Errorgenerator/errorGenerator");
const { generateAccessToken } = require("../../JsonWebToken/jwt");
const MemberDataAccess= require("../../dal/member.person.dal")
const {myFunction} = require ("../../nodemailer/nodemailer");
const Member = require("../../models/member.person.model");

exports.createMember = async (req) => {
  const _id =req.token_data._id
  console.log(_id)
  const { fullname,id_type,id_number,gender,floorNumber,unitNumber,streetName,postalCode,country} = req.body;
  if ( !fullname ||!id_type || !id_number || !gender || !floorNumber || !unitNumber || !streetName || !postalCode ||!country) {
    // throw new ExpressError(401, "Bad request");
    console.log('err')
  }
  // const passwordHash = bcrypt.hashSync(req.body.password, 10);
  const data = {
    user_id : _id,
    fullname : req.body.fullname,
    Relationship : req.body.Relationship,
    id_type : req.body.id_type,
    id_number : req.body.id_number,
    gender : req.body.gender,
    floorNumber : req.body.floorNumber,
    unitNumber : req.body.unitNumber,
    streetName : req.body.streetName,
    postalCode : req.body.postalCode,
    citizenship : req.body.citizenship,
    dob : req.body.dob,
    country : req.body.country
   };

  const storedUser = await MemberDataAccess.storeMember(data);
  if (storedUser){
  return {
    error: false,
    sucess: true,
    message: "Member Created Successfully",
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
      message: "Member Found Successfully",
      data: 
        member
    };
  };



  // Update Member Person Controller


  exports.updateMember = async (req, res) => {
    const _id = req.token_data._id;
    const updateData = {
      _id,
      toUpdate: {
        fullname : req.body.fullname,
        Relationship : req.body.Relationship,
        id_type : req.body.id_type,
        id_number : req.body.id_number,
        gender : req.body.gender,
        floorNumber : req.body.floorNumber,
        unitNumber : req.body.unitNumber,
        streetName : req.body.streetName,
        postalCode : req.body.postalCode,
        citizenship : req.body.citizenship,
        dob : req.body.dob,
        country : req.body.country
        // profileImage : req.file.filename
      },
    };
  const update = await MemberDataAccess.updateUser(updateData);
  if (update){
    return {
      error: false,
      sucess: true,
      message: "updated Member successfully",
      data: update,
    };
  };}
  