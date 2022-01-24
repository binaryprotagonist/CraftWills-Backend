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
    },
    Type : {
        type : String,
        default : "Safe Deposit Box"
    }

});


const SafeDeposit = mongoose.model("SafeDepositData", SafeDepositSchema);
module.exports = SafeDeposit;