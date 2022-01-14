const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const personalPossessionController = require("../../controllers/asset/personalPossession.controller");
// const session = require ("express-session")

router.post("/storePossession",authenticateToken ,async (req, res) => {
  const result = await personalPossessionController.storePossession(req);
  return res.send(result);
});


router.put("/updatePossession", authenticateToken, async (req, res) => {
  const result = await personalPossessionController.UpdatePossession(req);
  return res.json(result);
});


router.get("/getPossessionDetails",authenticateToken ,async (request, response) => {
  const result = await personalPossessionController.getPossessionDetails(request);
  return response.json(result);
});

module.exports  = router