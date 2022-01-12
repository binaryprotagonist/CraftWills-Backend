const investmentAccount = require("../../models/asset/investment.model");
require("../../JsonWebToken/jwt");

const findPolicy = async (data) => {
  const user = await investmentAccount.find(data);
  return user;
};

const storePolicy = async (MemberToStore) => {
  try{
  const storedPolicy = await investmentAccount.create(MemberToStore);
  return storedPolicy;
  }
  catch(err){
    console.log(err)
  }
};

const findPolicyByUsername = async (username) => {
  const user = await investmentAccount.findOne(username);
  return user;
};

const updatePolicy = async (userData) => {
  const user = await investmentAccount.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllPolicies = async () => {
  const user = await investmentAccount.find({});
  return user;
};

const deleteAllPolicies = async () => {
  const user = await investmentAccount.remove({});
  return user;
};

module.exports = {
  findPolicy,
  storePolicy,
  findPolicyByUsername,
  updatePolicy,
  findAllPolicies,
  deleteAllPolicies,
};