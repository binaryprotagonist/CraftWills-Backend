const SecuredLoan = require("../../models/liabilities/securedLoan.models");
require("../../JsonWebToken/jwt");

const findLoan = async (data) => {
  const user = await SecuredLoan.find(data).populate('addAssets');
  return user;
};

const storeLoan = async (LoanToStore) => {
  try{
  const storedLoan = await SecuredLoan.create(LoanToStore);
  return storedLoan;
  }
  catch(err){
    console.log(err)
  }
};

const findLoanByUsername = async (username) => {
  const user = await SecuredLoan.findOne(username);
  return user;
};

const updateLoan = async (userData) => {
  const user = await SecuredLoan.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllLoans = async () => {
  const user = await SecuredLoan.find({});
  return user;
};

const deleteAllLoans = async () => {
  const user = await SecuredLoan.remove({});
  return user;
};

module.exports = {
  findLoan,
  storeLoan,
  findLoanByUsername,
  updateLoan,
  findAllLoans,
  deleteAllLoans,
};