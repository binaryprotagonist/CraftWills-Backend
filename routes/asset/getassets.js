const express = require ("express");
const router = express.Router();
const { authenticateToken } = require("../../JsonWebToken/jwt");
const AssetCOontroller = require ("../../controllers/asset/asset.controller")


router.get('/getAssets',authenticateToken,AssetCOontroller.getAssetDetails)


module.exports = router; 