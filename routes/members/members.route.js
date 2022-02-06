const express = require("express");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const membersController = require ("../../controllers/members/members.controller")

router.post("/createMember",authenticateToken,membersController.createMember)
router.get ("/getMembers",authenticateToken,membersController.getMembers)
router.post("/filterMembers",authenticateToken,membersController.membersFilter)
router.put("/updateMember/:id",authenticateToken,membersController.updateMember)


module.exports = router