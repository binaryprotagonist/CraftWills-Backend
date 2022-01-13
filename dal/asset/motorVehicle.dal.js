const MotorVehicle = require("../../models/asset/realEstate.model");
require("../../JsonWebToken/jwt");

const findVehicle = async (data) => {
  const user = await MotorVehicle.find(data);
  return user;
};

const storeVehicle = async (VehicleToStore) => {
  try{
  const storedVehicle = await MotorVehicle.create(VehicleToStore);
  return storedVehicle;
  }
  catch(err){
    console.log(err)
  }
};

const findVehicleByUsername = async (username) => {
  const user = await MotorVehicle.findOne(username);
  return user;
};

const updateVehicle = async (userData) => {
  const user = await MotorVehicle.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllVehicles = async () => {
  const user = await MotorVehicle.find({});
  return user;
};

const deleteAllVehicles = async () => {
  const user = await MotorVehicle.remove({});
  return user;
};

module.exports = {
  findVehicle,
  storeVehicle,
  findVehicleByUsername,
  updateVehicle,
  findAllVehicles,
  deleteAllVehicles,
};