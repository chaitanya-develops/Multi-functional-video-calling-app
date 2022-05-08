var friendInvitationControllers = require("../controllers/friendInvitation/friendInvitationControllers");
var express = require("express");
var router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),
  });

router.post(
    "/invite",
    auth,
    validator.body(postFriendInvitationSchema),
    friendInvitationControllers.controllers.postInvite
  );

module.exports = router;
