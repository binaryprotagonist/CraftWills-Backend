const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const insurancePolicyController = require("../../controllers/asset/insurancepolicy.controller");
// const session = require ("express-session")

router.post("/storepolicy",authenticateToken ,async (req, res) => {
  const result = await insurancePolicyController.storeInsurancePolicy(req);
  return res.send(result);
});

router.put("/updatepolicy", authenticateToken, async (req, res) => {
  const result = await insurancePolicyController.UpdatePolicy(req);
  return res.json(result);
});

router.get("/getPolicyDetails",authenticateToken ,async (request, response) => {
  const result = await insurancePolicyController.getPolicyDetails(request);
  return response.json(result);
});

module.exports  = router