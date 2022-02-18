const Subscription = require("../../models/subscription/subscription.model");
require("dotenv").config();
const stripe = require("stripe")(process.env.skTestKey);
const moment = require("moment-timezone");


const subscription = async (req, res, next) => {
  const reports = await Subscription.find({
    $and: [{ userId: req.token_data._id }, { subscription: true }]
  })
  if(reports){
    next()
  }else{
    res.send({message:"your validity has been expired"})
  }
}


const todayDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
const storeData = async (subscriptionToStore) => {
  const data = await Subscription.create(subscriptionToStore);
  return data;
};


const findSub = async (data) => {
    
const reports = await Subscription.find();  
    return reports;
};


const customers = async (req) => {
  const createCustomer = await stripe.customers.create({
    email: req.body.stripeEmail,
    description: req.body.description,
    name: req.body.name,
    address: {
      line1: req.body.address,
      postal_code: req.body.zip,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
    },
  });
  return createCustomer;
};

const card = async (customer, req) => {
  let param = {};
  param.card = {
    number: req.body.cardNumber,
    exp_month: req.body.expMonth,
    exp_year: req.body.expYear,
    cvc: req.body.cvc,
  };

  return {
    token: await stripe.tokens.create(param),
    customerId: customer.id,
  };
};


const toke = async (result, req) => {
  const token = result["token"]["id"];
  const id = result.customerId;
  return await stripe.customers.createSource(id, {
    source: token,
  });
};


const subscriptionData = async (subscription, req) => {
  return await stripe.subscriptions.create({
    customer: subscription.customer,
    items: [
      {
        price: req.body.priceId,
      },
    ],
  });
};

const subId = async (sub) => {
  var data = {};
  data.priceId = sub.plan.id;
  data.subId = sub.id;
  data.periodStart = sub.current_period_start;
  data.periodEnd = sub.current_period_end;
  data.invoiceId = sub.latest_invoice;
  return data;
};

const createPlan = async (data) => {
  const plan = await stripe.plans.create({
    amount: data.planPrice,
    currency: data.currency,
    interval: data.duration,
    // interval_count: data.stripeDuration,
    product: data.productId,
  });
  data.stripePlanId = plan.id;
  return data;
};

const createProduct = async (req) => {
  const resp = await stripe.products.create({
    name: req.body.planName,
    description: req.body.description,
  });
  return resp;
};

const price = async (resp, req) => {
  const res = await stripe.prices.create({
    unit_amount: req.body.planPrice,
    currency: req.body.currency,
    recurring: { interval: req.body.duration },
    product: resp.id,
  });
  return res;
};

const creatp = async (res, resp, req) => {
  req.body.productId = resp.id;
  req.body.priceId = res.id;
  const result = await createPlan(req.body);
  return result;
};


const canclesub = async (req) => {
  const reports = await Subscription.find({
    $and: [{ userId: req.token_data._id }, { subscriptionEndDate: todayDate }]
  })
  if (reports) {
    console.log(reports)//sub_1KRytLJrEVeMChFEv2D8kcrj
    const subscribe = await  stripe.subscriptions.del(reports[0].subId);
    const user = await Subscription.findOneAndUpdate(
      reports[0].subscriptionEndDate,
      { $set: { subscription: false } },
      { new: true }
    );
    return subscribe
  }}

//////////////////////////////////

// const canclesub = async (req) => {
//   const reports = await Subscription.find({ subscriptionEndDate: todayDate})
//   if (reports) {
//     console.log(reports)//sub_1KRytLJrEVeMChFEv2D8kcrj
//     const subscribe = await  stripe.subscriptions.del(reports[0].subId);
//     const user = await Subscription.findOneAndUpdate(
//       reports[0].subscriptionEndDate,
//       { $set: { subscription: false } },
//       { new: true }
//     );
//     return subscribe
//   }}




///////////////////////

const delPlan = async (req) => {
  const deleteData = await stripe.plans.del(req.body.priceId);
  return deleteData;
};

module.exports = {
  storeData, findSub, customers, subscriptionData,
  toke, card, subId, creatp, price, createProduct, canclesub, delPlan,subscription 
}