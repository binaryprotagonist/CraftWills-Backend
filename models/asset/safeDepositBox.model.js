const mongoose = require("mongoose");
const SafeDepositSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    safe_Box_Location: {
        type: String,
        required: true
    },
    safe_No: {
        type: Number,
        required: true
    },
    country :{
        type : String,
        required : true,
        default : "Singapore"
    },
    specifyOwnershipType: {
        type: String,
        required: true
    }

});

module.exports = SafeDeposit;
const SafeDeposit = mongoose.model("SafeDepositData", SafeDepositSchema);