const express = require("express");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const subscriptionController = require("../../controllers/subscription/subscription.controller");

// router.get("/todayTotalAmount",(  async (request, response) => {
//   const result = await subscriptionController.getTotalAmountToday(request);
//   return response.json(result);
// }));

router.delete("/deletePlan", ( async (request, response) => {
  const result = await subscriptionController.deletePlan(request);
  return response.json(result);
}));

router.post("/payment", authenticateToken,async (req, res) => {
  const result = await subscriptionController.payment(req);
  return res.json(result);
});

router.post("/product", async (req, res) => {
    const result = await subscriptionController.createProduct(req);
    return res.json(result);
  });

router.post("/cancleSub", async (req, res) => {
  const result = await subscriptionController.cancleSubscription(req);
  return res.send(result);
});

// router.get("/getLastYear", async (request, response) => {
//   const result = await subscriptionController.getReportYear(request);
//   return response.json(result);
// });

// router.get("/getLast30Days",async (request, response) => {
//   const result = await subscriptionController.getReportDays(request);
//   return response.json(result);
// });

// router.get("/getReportWeekly",async (request, response) => {
//   const result = await subscriptionController.getReportWeekly(request);
//   return response.json(result);
// });

// router.get("/getReportLast6Month",async (request, response) => {
//   const result = await subscriptionController.getReport6Month(request);
//   return response.json(result);
// });

// router.get("/totalAmountWeekly",async (request, response) => {
//   const result = await subscriptionController.getTotalAmountWeekly(request);
//   return response.json(result);
// });

// router.get("/getLast30DaysTotalAmount",async (request, response) => {
//   const result = await subscriptionController.get30DaysTotalAmountDays(request);
//   return response.json(result);
// });

// router.get("/getLastYearAmount", async (request, response) => {
//   const result = await subscriptionController.getAmountYear(request);
//   return response.json(result);
// });

module.exports = router; 

/*
"stripeEmail": "subhashajmera@gmail.com",
  "planName": "monthly",
  "description": "subscription payment",
  "priceId": "price_1KRYsLJrEVeMChFE8O5KA96B",
  "planPrice": 200,
  "currency": "USD",
  "name": "sk_jmera",
  "address": "510 Townsend St",
  "zip": "98140",
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "cardNumber": "4242 4242 4242 4242",
  "expMonth": 5,
  "expYear": 2024,
  "cvc": 178,
  "productId": "prod_L7oVgMCZWwbTIw",
  "stripePlanId": "plan_L7oVI2nMjnjKRk"
}
*/



/*
{
  "subId": "sub_1KRYyhJrEVeMChFEc5WAeQM2",
  "priceId": "price_1KRYsLJrEVeMChFE8O5KA96B",
  "createTime": "2022-02-10",
  "isoDate": "2022-02-10T00:00:00Z",
  "amount": 20000,
  "_id": "6204db5bf5ce9fac47a29220",
  "__v": 0
}
*/

/*
{
  "userId": "6204a4926c53335322623741",
  "subId": "sub_1KRZN5JrEVeMChFEDSYAt2SH",
  "priceId": "price_1KRYsLJrEVeMChFE8O5KA96B",
  "createTime": "2022-02-10",
  "isoDate": "2022-02-10T00:00:00Z",
  "amount": 20000,
  "_id": "6204e14314518c74ca13c646",
  "__v": 0
}*/