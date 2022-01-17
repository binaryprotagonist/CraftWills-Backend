const unSecuredLoan = require("../../models/liabilities/unsecuredLoan.model");
require("../../JsonWebToken/jwt");

const findLoan = async (data) => {
  const user = await unSecuredLoan.find(data);
  return user;
};

const storeLoan = async (LoanToStore) => {
  try{
  const storedLoan = await unSecuredLoan.create(LoanToStore);
  return storedLoan;
  }
  catch(err){
    console.log(err)
  }
};

const findLoanByUsername = async (username) => {
  const user = await unSecuredLoan.findOne(username);
  return user;
};

const updateLoan = async (userData) => {
  const user = await unSecuredLoan.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllLoans = async () => {
  const user = await unSecuredLoan.find({});
  return user;
};

const deleteAllLoans = async () => {
  const user = await unSecuredLoan.remove({});
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