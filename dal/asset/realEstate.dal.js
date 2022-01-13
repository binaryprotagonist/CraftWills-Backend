const RealEstate = require("../../models/asset/realEstate.model");
require("../../JsonWebToken/jwt");

const findEstate = async (data) => {
  const user = await RealEstate.find(data);
  return user;
};

const storeEstate = async (MemberToStore) => {
  try{
  const storedPolicy = await RealEstate.create(MemberToStore);
  return storedPolicy;
  }
  catch(err){
    console.log(err)
  }
};

const findEstateByUsername = async (username) => {
  const user = await RealEstate.findOne(username);
  return user;
};

const updateEstate = async (userData) => {
  const user = await RealEstate.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllEstates = async () => {
  const user = await RealEstate.find({});
  return user;
};

const deleteAllEstates = async () => {
  const user = await RealEstate.remove({});
  return user;
};

module.exports = {
  findEstate,
  storeEstate,
  findEstateByUsername,
  updateEstate,
  findAllEstates,
  deleteAllEstates,
};