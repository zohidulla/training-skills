const { Router } = require("express");
const {
  getLoginPage,
  loginUser,
  logout,
  getRegisterPage,
  registerUser,
} = require("../controllers/auth.controller");
const { protected, guest } = require("../middlewares/auth");
const { body, check } = require("express-validator");

const router = Router();

router.get("/login", guest, getLoginPage);
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Please enter valid email address"),
    body("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  guest,
  loginUser
);
router.get("/logout", protected, logout);
router.get("/registration", guest, getRegisterPage);
router.post(
  "/registration",
  [
    body("email", "Please add valid email address").isEmail(),
    body("name", "Name can contain only alphabetical characters").isAlpha(),
    body(
      "password",
      "Please enter password with minimum 6 characters and with alphabetical and numeric values"
    )
      .isLength({ min: 6 })
      .isAlphanumeric(),
  ],
  guest,
  registerUser
);

module.exports = router;
