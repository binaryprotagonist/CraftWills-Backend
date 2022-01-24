const mongoose = require("mongoose");
const RealEstateSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: "Singapore",
        required: true
    },
    specifyOwnershipType: {
        type: String,
        required: true
    },
    Type : {
        type : String,
        default : "Real Estate"
    }

});

const RealEstate = mongoose.model("RealEstateData", RealEstateSchema);
module.exports = RealEstate;