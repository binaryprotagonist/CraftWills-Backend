const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
// const { authenticateToken } = require("../JsonWebToken/jwt");
const router = express.Router();
const BankController = require("../controllers/bankaccount.controller");
// const session = require ("express-session")

router.post("/bankAccount", async (req, res) => {
  const result = await BankController.storeBank(req);
  return res.send(result);
});


module.exports  = router