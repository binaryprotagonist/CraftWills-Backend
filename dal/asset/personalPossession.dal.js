const PersonalPossession = require("../../models/asset/personalPossession.model");
require("../../JsonWebToken/jwt");

const findPossession = async (data) => {
  const user = await PersonalPossession.find(data);
  return user;
};

const storePossession = async (PossessionToStore) => {
  try{
  const storedPossession = await PersonalPossession.create(PossessionToStore);
  return storedPossession;
  }
  catch(err){
    console.log(err)
  }
};

const findPossessionByUsername = async (username) => {
  const user = await PersonalPossession.findOne(username);
  return user;
};

const updatePossession = async (userData) => {
  const user = await PersonalPossession.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllPossessions = async () => {
  const user = await PersonalPossession.find({});
  return user;
};

const deleteAllPossessions = async () => {
  const user = await PersonalPossession.remove({});
  return user;
};

module.exports = {
  findPossession,
  storePossession,
  findPossessionByUsername,
  updatePossession,
  findAllPossessions,
  deleteAllPossessions,
};