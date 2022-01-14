const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const intellectualPropertyController = require("../../controllers/asset/intellectualproperty.contoroller");
// const session = require ("express-session")

router.post("/storeProperty",authenticateToken ,async (req, res) => {
  const result = await intellectualPropertyController.storeProperty(req);
  return res.send(result);
});

// router.put("/updatepolicy", authenticateToken, async (req, res) => {
//   const result = await insurancePolicyController.UpdatePolicy(req);
//   return res.json(result);
// });

router.get("/getPropertyDetails",authenticateToken ,async (request, response) => {
  const result = await intellectualPropertyController.getPropertyDetails(request);
  return response.json(result);
});

module.exports  = router