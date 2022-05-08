var express = require("express");
var router = express.Router();
var postAuthentication = require("../controllers/postAuthentication");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(4).max(12).required(),
    email: Joi.string().email().required(),
});
  
const loginSchema = Joi.object({
    password: Joi.string().min(4).max(12).required(),
    email: Joi.string().email().required(),
});

router.post("/login",validator.body(loginSchema),postAuthentication.controllers.loginPost);
router.post("/register",validator.body(registerSchema),postAuthentication.controllers.registerPost);

// test route to verify if our middleware is working
router.get("/test", auth, (req, res) => {
    res.send("request passed");
  });

module.exports = router;
