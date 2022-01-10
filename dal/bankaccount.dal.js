const Bank = require("../models/bankAccount.model");
require("../JsonWebToken/jwt");

const findBank = async (data) => {
  const user = await Bank.findById(data);
  return user;
};

const storeBank = async (bankToStore) => {
  try{
  const storedBank = await Bank.create(bankToStore);
  return storedBank;
  }
  catch(err){
    console.log(err)
  }
};

// const findUserByUsername = async (username) => {
//   const user = await User.findOne(username);
//   return user;
// };

const updateBank = async (userData) => {
  const user = await Bank.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
  // await user.save()
  return user;
};

// const findAll = async () => {
//   const user = await User.find({});
//   return user;
// };

// const deleteAll = async () => {
//   const user = await User.remove({});
//   return user;
// };

module.exports = {
    findBank,
    storeBank,
    updateBank
};