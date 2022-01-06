const mongoose = require("mongoose");
const assetSchema = new mongoose.Schema({
  
  bankname : {
    type : String,
    required : true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  country : {
    type : String,
    required : true,
    default : "Singapore"
  },
  estimateValue : {
    type : String,
    required : true,
  },
  specifyOwnershipType :{
    type : String,
    required : true
  }
});

const Asset = mongoose.model("AssetData", assetSchema);
module.exports = Asset;