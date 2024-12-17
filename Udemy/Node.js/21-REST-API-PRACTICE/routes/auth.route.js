const { Router } = require("express");
const router = Router();
const {
  register,
  login,
  getProfile,
  updateProfile,
  updatePassword,
  paymentBalance,
  activateProfile,
} = require("../controllers/auth.controller");
const { protected } = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protected, getProfile);
router.put("/update", protected, updateProfile);
router.put("/password", protected, updatePassword);
router.put("/payment", protected, paymentBalance);
router.put("/activate", protected, activateProfile);

module.exports = router;
