const intellectualProperty = require("../../models/asset/intellectualProperty.model");
require("../../JsonWebToken/jwt");

const findProperty = async (data) => {
  const user = await intellectualProperty.find(data);
  return user;
};

const storeProperty = async (property) => {
  try{
  const storedPolicy = await intellectualProperty.create(property);
  return storedPolicy;
  }
  catch(err){
    console.log(err)
  }
};

const findPropertyByUsername = async (username) => {
  const user = await intellectualProperty.findOne(username);
  return user;
};

const updateProperty = async (userData) => {
  const user = await intellectualProperty.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllProperties = async () => {
  const user = await intellectualProperty.find({});
  return user;
};

const deleteAllProperties = async () => {
  const user = await intellectualProperty.remove({});
  return user;
};

module.exports = {
  findProperty,
  storeProperty,
  findPropertyByUsername,
  updateProperty,
  findAllProperties,
  deleteAllProperties,
};