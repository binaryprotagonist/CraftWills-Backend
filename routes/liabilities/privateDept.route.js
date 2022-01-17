const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const privateDeptController = require("../../controllers/liabilities/privateDept.controller");
// const session = require ("express-session")

router.post("/storeDept",authenticateToken ,async (req, res) => {
  const result = await privateDeptController.storePersonalDept(req);
  return res.send(result);
});

//currently ignorable
router.put("/updateDept", authenticateToken, async (req, res) => {
  const result = await privateDeptController.Updatedept(req);
  return res.json(result);
});

router.get("/getDeptDetails",authenticateToken ,async (request, response) => {
  const result = await privateDeptController.getDeptDetails(request);
  return response.json(result);
});

module.exports  = router
