const express = require("express");
const router = express.Router();

const validate = require("../middlewere/validate-middleware");
const singupSchema = require("../validators/auth-validator");
const loginShema = require("../validators/login-validators")
const authController = require("../controllers/auth-controller");
const authMiddlewere = require("../middlewere/authMiddlwere");

router.route("/").get(authController.home);

// ********************************************Register routing

router.route("/register").post(validate(singupSchema),authController.register);
router.route("/login").post(validate(loginShema),authController.login);
router.route("/user").get(authMiddlewere, authController.user)

// *************************************************************Log in route



module.exports = router;
