const mongoose = require("mongoose");
const MotorVehicleSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    CarModel: {
        type: String,
        required: true
    },
    plateNo :{
        type : String,
        required : true
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

const MotorVehicle = mongoose.model("MotorVehicleData", MotorVehicleSchema);
module.exports = MotorVehicle;