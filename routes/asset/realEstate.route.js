const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const realEstateController = require("../../controllers/asset/realEstate.controller");
// const session = require ("express-session")

router.post("/storeEstate",authenticateToken ,async (req, res) => {
  const result = await realEstateController.storeEstate(req);
  return res.send(result);
});

router.put("/updateEstate", authenticateToken, async (req, res) => {
  const result = await realEstateController.UpdateEstate(req);
  return res.json(result);
});

router.get("/getEstateDetails",authenticateToken ,async (request, response) => {
  const result = await realEstateController.getEstateDetails(request);
  return response.json(result);
});


module.exports  = router