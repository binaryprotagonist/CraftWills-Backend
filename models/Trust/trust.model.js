// const { number, string } = require("joi");
const mongoose = require("mongoose");
const TrustSchema = new mongoose.Schema({
  
    trustName : {
        type : String,
        required : true
    },
    description : {
        type : String
    }
});

const Trust = mongoose.model("TrustData", TrustSchema);
module.exports = Trust;