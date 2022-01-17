const mongoose = require("mongoose");
const OtherAssetsSchema = new mongoose.Schema({

    asset_name: {
        type: String,
    },

    id_No : {
        type : String,
        unique : true
    },
    country : {
        type : String,
        required : true,
        default : "Singapore"
    },
    specifyOwnershipType : {
        type : String,
        required : true
    }


});

const OtherAssets = mongoose.model("OtherAssetsData", OtherAssetsSchema);
module.exports = OtherAssets;