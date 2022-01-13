const Business = require("../../models/asset/business.model");
require("../../JsonWebToken/jwt");

const findBusiness = async (data) => {
  const user = await Business.find(data);
  return user;
};

const storeBusiness = async (BusinessToStore) => {
  try{
  const storedBusiness = await Business.create(BusinessToStore);
  return storedBusiness;
  }
  catch(err){
    console.log(err)
  }
};

const findBusinessByUsername = async (username) => {
  const user = await Business.findOne(username);
  return user;
};

const updateBusiness = async (userData) => {
  const user = await Business.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllBusiness = async () => {
  const user = await Business.find({});
  return user;
};

const deleteAllBusiness = async () => {
  const user = await Business.remove({});
  return user;
};

module.exports = {
  findBusiness,
  storeBusiness,
  findBusinessByUsername,
  updateBusiness,
  findAllBusiness,
  deleteAllBusiness,
};