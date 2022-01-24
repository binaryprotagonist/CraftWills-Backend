const mongoose = require("mongoose");
const PersonalPossessionSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    Name : {
        type : String,
        required : true
    },
    id_No : {
        type : String
    },
    country : {
        type : String,
        required : true,
        default : "Singapore"
    },
    specifyOwnershipType : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        default : "Personal Possession"
    }


});

const PersonalPossession = mongoose.model("PersonalPossessionData", PersonalPossessionSchema);
module.exports = PersonalPossession;