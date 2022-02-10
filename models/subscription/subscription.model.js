const mongoose = require("mongoose");
const subscriptionSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//   },
   userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'UserData'
    },
  address: {
    type: String,
  },
  name: {
    type: String,
  },
  stripeEmail:{
    type:String
  },
  subId:{
    type:String
  },
  priceId:{
    type:String
  },
  createTime:{
    type:String
  },
  subscriptionEndDate:{
    type:String
  },
  subscriptionStartDate:{
    type:String
  },
  isoDate:{
    type:String
  },
  longestStreak:{
    type:String
  },
  currentStreak:{
    type:String
  },
  subscription:{
    type:Boolean
  },
  amount:{
    type:Number
  }
});

const Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;