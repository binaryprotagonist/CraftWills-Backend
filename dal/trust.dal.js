const Trust = require("../models/trust.model");
require("../JsonWebToken/jwt");

const findTrust = async (data) => {
  const user = await Trust.find({user_id : data});
  return user;
};

const storeTrust = async (trustToStore) => {
  try{
  const storedTrust = await Trust.create(trustToStore);
  return storedTrust;
  }
  catch(err){
    console.log(err)
  }
};



const updateTrust = async (userData) => {
  const user = await Trust.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
  // await user.save()
  return user;
};


module.exports = {
    findTrust,
    storeTrust,
    updateTrust
};