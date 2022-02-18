require("dotenv").config();
const cron = require("node-cron");
const moment = require("moment-timezone");
const stripe = require("stripe")(process.env.skTestKey);
const todayDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
const Subscription = require("../../src/models/subscription/subscription.model");
cron.schedule("20 0 * * *", async () => {
  const reports = await Subscription.find({ subscriptionEndDate: todayDate})
  if (reports) {
    console.log("Cronjob is Running")  
    const subscribe = await  stripe.subscriptions.del(reports[0].subId);
    const user = await Subscription.findOneAndUpdate(
      reports[0].subscriptionEndDate,
      { $set: { subscription: false } },
      { new: true }
      );
      
console.log(subscribe)
return subscribe  
}
});
