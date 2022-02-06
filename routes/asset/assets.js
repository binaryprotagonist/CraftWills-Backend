const express = require ("express");
const router = express.Router();
const { authenticateToken } = require("../../JsonWebToken/jwt");
const AssetsController = require ("../../controllers/asset/assets.controller");


router.post('/storeAssets',authenticateToken,AssetsController.storeAssets)
router.get ("/getAssets",authenticateToken,AssetsController.getAssets)
router.put("/updateAssets",authenticateToken,AssetsController.updateAssets)
router.get("/getAssetStat",authenticateToken,AssetsController.totalAssetsAmount)
router.get("/totalNetWorth",authenticateToken,AssetsController.totalNetWorth)
router.get ("/getAssetsMonthly",authenticateToken,AssetsController.getAssetsMonthly);
router.get("/filterAssets",authenticateToken,AssetsController.filterAssets)
module.exports = router; 