const mongoose = require("mongoose");
const IntellectualPrpertySchema = new mongoose.Schema({
    user_id: {
        type: String,
    },
    ip_Name : {
        type : String,
        required : true
    },
    ip_No : {
        type : String
    },
    country : {
        type : String,
        required : true,
        default : "Singapore"
    },
    SpecifyOwnershipType :{
        type : String,
        required : true
    },
    Type : {
        type : String,
        default : "Intellectual Property"
    },
    
});

const IntellectualProperty = mongoose.model("IntellectualPropertyData", IntellectualPrpertySchema);
module.exports = IntellectualProperty;