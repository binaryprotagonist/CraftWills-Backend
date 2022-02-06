const members = require("../../models/members.model");
require("../../JsonWebToken/jwt");


const updateMember = async (userData) => {
  const user = await members.findByIdAndUpdate(
    userData._id,
    { $set: userData.toUpdate },
    { new: true }
  );
//   await user.save()
  return user;
};

const deleteAllMembers = async () => {
  const user = await members.remove({});
  return user;
};

module.exports = {
 updateMember,
 deleteAllMembers
};