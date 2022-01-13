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
    }

});

const RealEstate = mongoose.model("RealEstateData", RealEstateSchema);
module.exports = RealEstate;