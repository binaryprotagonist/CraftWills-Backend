const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const MotorVehicleController = require("../../controllers/asset/motorvehicle.controller");
// const session = require ("express-session")

router.post("/storeVehicle",authenticateToken ,async (req, res) => {
  const result = await MotorVehicleController.storeVehicle(req);
  return res.send(result);
});

router.put("/updateVehicle", authenticateToken, async (req, res) => {
  const result = await MotorVehicleController.UpdateVehicle(req);
  return res.json(result);
});

router.get("/getVehicleDetails",authenticateToken ,async (request, response) => {
  const result = await MotorVehicleController.getVehicleDetails(request);
  return response.json(result);
});


module.exports  = router