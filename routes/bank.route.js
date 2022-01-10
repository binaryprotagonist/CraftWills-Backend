const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../JsonWebToken/jwt");
const router = express.Router();
const BankController = require("../controllers/bankaccount.controller");
// const session = require ("express-session")

router.post("/bankAccount",authenticateToken ,async (req, res) => {
  const result = await BankController.storeBank(req);
  return res.send(result);
});

router.put("/updateBank", authenticateToken, async (req, res) => {
  const result = await BankController.UpdateBank(req);
  return res.json(result);
});

router.get("/getBankDetails",authenticateToken ,async (request, response) => {
  const result = await BankController.getBankDetails(request);
  return response.json(result);
});

module.exports  = router