const SafeDeposit = require("../../models/asset/safeDepositBox.model");
require("../../JsonWebToken/jwt");

const findDeposit = async (data) => {
  const user = await SafeDeposit.find(data);
  return user;
};

const storeDeposit = async (DepositToStore) => {
  try{
  const storedDeposit = await SafeDeposit.create(DepositToStore);
  return storedDeposit;
  }
  catch(err){
    console.log(err)
  }
};

const findDepositByUsername = async (username) => {
  const user = await SafeDeposit.findOne(username);
  return user;
};

const updateDeposit = async (userData) => {
  const user = await SafeDeposit.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllDeposits = async () => {
  const user = await SafeDeposit.find({});
  return user;
};

const deleteAllDeposits = async () => {
  const user = await SafeDeposit.remove({});
  return user;
};

module.exports = {
  findDeposit,
  storeDeposit,
  findDepositByUsername,
  updateDeposit,
  findAllDeposits,
  deleteAllDeposits,
};