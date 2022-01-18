const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const unSecuredLoanController = require("../../controllers/liabilities/unSecuredLoan.controller");
// const session = require ("express-session")

router.post("/storeUnsecureLoan",authenticateToken ,async (req, res) => {
  const result = await unSecuredLoanController.storeLoan(req);
  return res.send(result);
});

router.put("/updateLoan", authenticateToken, async (req, res) => {
  const result = await unSecuredLoanController.UpdateLoanData(req);
  return res.json(result);
});

router.get("/getUnsecureLoanDetails",authenticateToken ,async (request, response) => {
  const result = await unSecuredLoanController.getLoanDetails(request);
  return response.json(result);
});

module.exports  = router
