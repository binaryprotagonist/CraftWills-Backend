const mongoose = require("mongoose");
const MotorVehicleSchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    CarModel : {
        type : String,
        required : true
    },
    plateNo : {
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true,
        default : "Singapore"
    },
    SpecifyOwnershipType: {
        type: String,
        required: true
    },
    Type : {
        type : String,
        default : "Motor Vehicle"
    }

});


const MotorVehicle = mongoose.model("MotorVehicleData", MotorVehicleSchema);
module.exports = MotorVehicle;