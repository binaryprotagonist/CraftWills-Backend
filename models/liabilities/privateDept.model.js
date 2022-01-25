const mongoose = require("mongoose");
const privateDeptSchema = new mongoose.Schema({
  user_id : {
    type : String
  }
  ,
  dept_Name : {
    type : String,
    required : true
  }
  ,
  current_Outstanding_Amount : {
    type : String,
    required : true
  },
  description: {
    type: String, 
    
  },
  lender : [
      {
          type : mongoose.Schema.Types.ObjectId,
          ref : "Memberdata"
      }
  ],
  Type : {
    type : String,
    default : "Private Debt"

  }

});

const PrivateDeptSchema = mongoose.model("PrivateDeptData", privateDeptSchema);
module.exports = PrivateDeptSchema;