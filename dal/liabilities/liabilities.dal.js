const liabilities = require("../../models/liabilities/liabilities.model");
require("../../JsonWebToken/jwt");


const updateLiabilities = async (userData) => {
  const user = await liabilities.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const deleteAllLiabilities = async () => {
  const user = await liabilities.remove({});
  return user;
};

const findLiabilitiesMonthly = async (data) =>{
  const user = await liabilities.find({isoDate: {$gte: data.fromDate, $lt: data.endDate}})
  return user;
}
module.exports = {
 updateLiabilities,
 deleteAllLiabilities,
 findLiabilitiesMonthly
};