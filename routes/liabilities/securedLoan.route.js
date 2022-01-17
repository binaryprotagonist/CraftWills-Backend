const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const SecuredLoanController = require("../../controllers/liabilities/securedLoan.controller");
// const session = require ("express-session")

router.post("/storeLoan",authenticateToken ,async (req, res) => {
  const result = await SecuredLoanController.storeLoan(req);
  return res.send(result);
});

router.put("/updateLoan", authenticateToken, async (req, res) => {
  const result = await SecuredLoanController.UpdateLoanData(req);
  return res.json(result);
});

router.get("/getLoanDetails",authenticateToken ,async (request, response) => {
  const result = await SecuredLoanController.getLoanDetails(request);
  return response.json(result);
});

module.exports  = router
