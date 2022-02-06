const mongoose = require("mongoose");
const TrustSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    isoDate : {
        type : String
    },
    trustName: {
        type: String,
    },
    description: {
        type: String
    }
});

const Trust = mongoose.model("TrustData", TrustSchema);
module.exports = Trust;