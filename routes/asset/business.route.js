const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const BusinessController = require("../../controllers/asset/business.controller");
// const session = require ("express-session")

router.post("/storeBusiness",authenticateToken ,async (req, res) => {
  const result = await BusinessController.storeBusiness(req);
  return res.send(result);
});

router.put("/updateBusiness", authenticateToken, async (req, res) => {
  const result = await BusinessController.UpdateBusiness(req);
  return res.json(result);
});

router.get("/getBusinessDetails",authenticateToken ,async (request, response) => {
  const result = await BusinessController.getBusinessDetails(request);
  return response.json(result);
});


module.exports  = router