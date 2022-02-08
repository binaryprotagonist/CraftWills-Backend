const mongoose = require('mongoose')
const subscriptionSchema = mongoose.Schema({
    regularPlan : {
        type : Number
    },
    subscriptionStartDate :{
        type : String
    },
    subscriptionEndDate : {
        type : String
    },
    currentSubscription : {
        type : Number
    },
    isValid : {
        type : Boolean
    }

});


const Subscription = mongoose.model("subscription",subscriptionSchema)

module.exports(Subscription)