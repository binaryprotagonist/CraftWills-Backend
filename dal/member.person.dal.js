const MemberPerson = require("../models/member.person.model");
require("../JsonWebToken/jwt");

const findMember = async (data) => {
  const user = await MemberPerson.findOne(data);
  return user;
};

const storeMember = async (MemberToStore) => {
  try{
  const storedMember = await MemberPerson.create(MemberToStore);
  return storedMember;
  }
  catch(err){
    console.log(err)
  }
};

const findMemberByUsername = async (username) => {
  const user = await MemberPerson.findOne(username);
  return user;
};

const updateMember = async (userData) => {
  const user = await MemberPerson.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
  await user.save()
  return user;
};

const findAllMembers = async () => {
  const user = await MemberPerson.find({});
  return user;
};

const deleteAllMembers = async () => {
  const user = await MemberPerson.remove({});
  return user;
};

module.exports = {
  findMember,
  storeMember,
  findMemberByUsername,
  updateMember,
  findAllMembers,
  deleteAllMembers,
};