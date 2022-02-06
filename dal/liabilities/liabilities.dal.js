const liabilities = require("../../models/liabilities/liabilities.model");
require("../../JsonWebToken/jwt");


const updateLiabilities = async (userData) => {
  const user = await privateDept.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const deleteAllLiabilities = async () => {
  const user = await privateDept.remove({});
  return user;
};

module.exports = {
 updateLiabilities,
 deleteAllLiabilities
};