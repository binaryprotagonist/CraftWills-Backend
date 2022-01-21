const mongoose = require("mongoose");
const TrustSchema = new mongoose.Schema({
    user_id: {
        type: String
    },

    trustName: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Trust = mongoose.model("TrustData", TrustSchema);
module.exports = Trust;