const express = require ("express");
const router = express.Router();
const { authenticateToken } = require("../../JsonWebToken/jwt");
const LiabilitiesController = require ("../../controllers/liabilities/liabilities.controller")


router.get('/liabilities',authenticateToken,LiabilitiesController.Liabilities)


module.exports = router;    