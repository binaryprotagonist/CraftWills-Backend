const express = require("express");
// const passport = require("passport");
const upload = require("../../middleware/multer");
const { authenticateToken } = require("../../JsonWebToken/jwt");
const router = express.Router();
const memberPersonController = require("../../controllers/member.person.controller");

router.post("/addMember",authenticateToken,async (req,res)=>{
    const member = await memberPersonController.createMember(req)
    return res.send(member)
})

router.get("/getMember",authenticateToken ,async (request, response) => {
    const result = await memberPersonController.getMember(request);
    return response.json(result);
  });

router.put("/updatePersonMember", authenticateToken, async (req, res) => {
    const result = await memberPersonController.updateMember(req);
    return res.json(result);
  });
  
module.exports = router;