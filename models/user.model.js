const { number, string } = require("joi");
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({

  first_name: {
    type: String,
  },

  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  id_type: {
    type : String,
    required : true
  },
  id_number : {
    type : Number,
    required : true

  },
  fullname : {
    type : String,
    required : true

},
confirmpassword : {
  type : String,
  required: true
}
});

const User = mongoose.model("UserData", UserSchema);
module.exports = User;