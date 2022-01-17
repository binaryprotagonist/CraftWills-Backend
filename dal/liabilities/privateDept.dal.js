const privateDept = require("../../models/liabilities/privateDept.model");
require("../../JsonWebToken/jwt");

const findDept = async (data) => {
  const user = await privateDept.find(data);
  return user;
};

const storeDept = async (DeptToStore) => {
  try{
  const storedDept = await privateDept.create(DeptToStore);
  return storedDept;
  }
  catch(err){
    console.log(err)
  }
};

const findDeptByUsername = async (username) => {
  const user = await privateDept.findOne(username);
  return user;
};

const updateDept = async (userData) => {
  const user = await privateDept.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const findAllDepts = async () => {
  const user = await privateDept.find({});
  return user;
};

const deleteAllDepts = async () => {
  const user = await privateDept.remove({});
  return user;
};

module.exports = {
  findDept,
  storeDept,
  findDeptByUsername,
  updateDept,
  findAllDepts,
  deleteAllDepts
};