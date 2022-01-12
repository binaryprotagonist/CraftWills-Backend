const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const investmentAccountController = require("../../controllers/asset/investment.controller");
// const session = require ("express-session")

router.post("/storeInvestmentAccount",authenticateToken ,async (req, res) => {
  const result = await investmentAccountController.storeInvestmentAccount(req);
  return res.send(result);
});


router.put("/updateinvestment", authenticateToken, async (req, res) => {
  const result = await investmentAccountController.UpdateInvestment(req);
  return res.json(result);
});


router.get("/getInvestmentDetails",authenticateToken ,async (request, response) => {
  const result = await investmentAccountController.getInvestmentDetails(request);
  return response.json(result);
});

module.exports  = router
