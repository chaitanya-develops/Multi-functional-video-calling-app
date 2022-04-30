var express = require("express");
var router = express.Router();
var postAuthentication = require("../controllers/postAuthentication");

router.post("/login",postAuthentication.controllers.loginPost);
router.post("/register",postAuthentication.controllers.registerPost);

module.exports = router;
