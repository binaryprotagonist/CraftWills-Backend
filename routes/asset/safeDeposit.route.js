const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const safeDepositController = require("../../controllers/asset/safeDeposit.controller");
// const session = require ("express-session")

router.post("/storeDeposit",authenticateToken ,async (req, res) => {
  const result = await safeDepositController.storeDeposit(req);
  return res.send(result);
});


router.put("/updateDeposit", authenticateToken, async (req, res) => {
  const result = await safeDepositController.UpdateDeposit(req);
  return res.json(result);
});


router.get("/getDepositDetails",authenticateToken ,async (request, response) => {
  const result = await safeDepositController.getDepositDetails(request);
  return response.json(result);
});

module.exports  = router
