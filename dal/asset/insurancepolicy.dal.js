const insurancePolicy = require("../../models/asset/insurance.model");
require("../../JsonWebToken/jwt");

const findPolicy = async (data) => {
  const user = await insurancePolicy.find(data);
  return user;
};

const storePolicy = async (MemberToStore) => {
  try{
  const storedPolicy = await insurancePolicy.create(MemberToStore);
  return storedPolicy;
  }
  catch(err){
    console.log(err)
  }
};

const findPolicyByUsername = async (username) => {
  const user = await insurancePolicy.findOne(username);
  return user;
};

const updatePolicy = async (userData) => {
  const user = await insurancePolicy.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllPolicies = async () => {
  const user = await insurancePolicy.find({});
  return user;
};

const deleteAllPolicies = async () => {
  const user = await insurancePolicy.remove({});
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