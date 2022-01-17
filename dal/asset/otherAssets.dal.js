const OtherAssets = require("../../models/asset/otherAssets.model");
require("../../JsonWebToken/jwt");

const findAsset = async (data) => {
  const user = await OtherAssets.find(data);
  return user;
};

const storeAsset = async (assetToStore) => {
  try{
  const storedAsset = await OtherAssets.create(assetToStore);
  return storedAsset;
  }
  catch(err){
    console.log(err)
  }
};

const findAssetByUsername = async (username) => {
  const user = await OtherAssets.findOne(username);
  return user;
};

const updateAsset = async (userData) => {
  const user = await OtherAssets.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllAssets = async () => {
  const user = await OtherAssets.find({});
  return user;
};

const deleteAllAssets = async () => {
  const user = await OtherAssets.remove({});
  return user;
};

module.exports = {
  findAsset,
  storeAsset,
  findAssetByUsername,
  updateAsset,
  findAllAssets,
  deleteAllAssets,
};