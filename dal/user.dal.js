const User = require("../models/user.model");
require("../JsonWebToken/jwt");

const findUser = async (data) => {
  const user = await User.findById(data);
  return user;
};

const storeUser = async (userToStore) => {
  try{
  const storedUser = await User.create(userToStore);
  return storedUser;
  }
  catch(error){
    res.json({
      message : "some error occured",
      err : error
    })
  }
};

const findUserByUsername = async (username) => {
  try{
  const user = await User.findOne(username);
  return user;
  }
  catch(error) {
    res.json({
      message : "Error Found",
      err : error
    })
  }
};

const updateUser = async (userData) => {
  try {
  const user = await User.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
  return user;
  }
  catch (error){
    res.json({
      message : "error found",
      err : error
    })
  }
};

const findAll = async () => {
  try {
  const user = await User.find({});
  return user;
  }
  catch (error){
    res.json({
      message : "error found",
      err : error
    })
  }
};

const deleteAll = async () => {
  try {
  const user = await User.remove({});
  return user;
  }
  catch (error){
    res.json({
      message : "error found",
      err : error
    })
  }
};

module.exports = {
  findUser,
  storeUser,
  findUserByUsername,
  updateUser,
  findAll,
  deleteAll,
};