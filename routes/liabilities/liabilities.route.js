const express = require("express");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const liabilitiesController = require ("../../controllers/liabilities/liabilities.controller");

router.post ("/storeLiabilities", authenticateToken , liabilitiesController.storeLiabilities);
router.get("/getLiabilities",authenticateToken , liabilitiesController.getLiabilities);
router.get("/getStats",authenticateToken,liabilitiesController.liabilitystats);
router.get("/filterLiabilities",authenticateToken,liabilitiesController.liabilitiesFilter);


module.exports = router;