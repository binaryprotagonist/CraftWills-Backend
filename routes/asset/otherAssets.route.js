const express = require("express");
// const passport = require("passport");
// const upload = require("../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const assetController = require("../../controllers/asset/otherAssets.controller");
// const session = require ("express-session")

router.post("/storeAsset",authenticateToken ,async (req, res) => {
  const result = await assetController.storeAsset(req);
  return res.send(result);
});


router.put("/updateAsset", authenticateToken, async (req, res) => {
  const result = await assetController.UpdateAsset(req);
  return res.json(result);
});


router.get("/getAssetDetails",authenticateToken ,async (request, response) => {
  const result = await assetController.getAssetDetails(request);
  return response.json(result);
});

module.exports  = router