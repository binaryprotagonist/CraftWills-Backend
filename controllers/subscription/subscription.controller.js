const subscriptionDataAccess = require("../../dal/subscription/subscription.dal");
// const ExpressError = require("../../Errorgenerator/errorGenerator");
const moment = require("moment-timezone");
require("../../JsonWebToken/jwt");
const Sub = require("../../models/subscription/subscription.model")
// const ExpressError = require("../../Errorgenerator/errorGenerator");

// payment

exports.payment = async (req) => {
  if(req.body.pricePlan=="free"){
  return await subscriptionDataAccess.storeData({pricePlan:req.body.pricePlan})};


  const _id = req.token_data._id;
  const customer = await subscriptionDataAccess.customers(req);
  const result = await subscriptionDataAccess.card(customer, req);
  const subscription = await subscriptionDataAccess.toke(result, req);
  const sub = await subscriptionDataAccess.subscriptionData(subscription, req);
  const subData = await subscriptionDataAccess.subId(sub);
  
  subData.createTime = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
  subData.isoDate = moment().tz("Asia/Kolkata").format("YYYY-MM-DD") + "T00:00:00Z";
  subData.amount=sub.plan.amount;
  subData.userId=_id
  subData.subscription=true
  subData.pricePlan=req.body.pricePlan


    let months=parseInt(moment().tz(" Asia/Kolkata").format("MM"));
    months=months+1
    if (months < 10){
      months= "0" + months
    }

//   if(req.body.duration==="year"){
//   const year = parseInt(moment().tz("Asia/Kolkata").format("YYYY"))+1
//   subData.subscriptionStartDate= moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
//   subData.subscriptionEndDate= moment().tz("Asia/Kolkata").format(`${year}-MM-DD`);
//   return await subscriptionDataAccess.storeData(subData);
// }else{

  subData.subscriptionStartDate= moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
  subData.subscriptionEndDate= moment().tz("Asia/Kolkata").format(`YYYY-${months}-DD`);
  return await subscriptionDataAccess.storeData(subData)};
// };
  

exports.cancleSubscription = async (req) => {
  return await subscriptionDataAccess.canclesub(req);
};

exports.createProduct = async (req) => {
  const data1 = await subscriptionDataAccess.createProduct(req);
  const data2 = await subscriptionDataAccess.price(data1, req);
  return await subscriptionDataAccess.creatp(data2, data1, req);
};

exports.upgradeSub = async(req) =>{
  return await subscriptionDataAccess.Upgrade(req)
}

// exports.getTotalAmountToday = async (req) => {
//   const createTime = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");//req.body.createTime;//"2021-10-23"
//   const sub = await subscriptionDataAccess.findSub({createTime:createTime});
//   for(i of sub){
  //   let totalAmount=0
//     if(i.amount!==undefined)
//     totalAmount=totalAmount+i.amount;
//   }
//   return {
//     error: false,
//     sucess: true,
//     message: "Get today total amount data",
//     data: sub,
//     totalAmount:totalAmount
//   };
// };

exports.deletePlan = async (req) => {
  return await subscriptionDataAccess.delPlan(req);
};

exports.getSubsDetails = async (req,res)=>{
  const  _id = req.token_data._id;
  const data = await Sub.find({userId : _id}) ;
  return data ;
}

