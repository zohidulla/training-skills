const { Router } = require("express");
const {
  getUserProfile,
  getMyProfile,
  updateProfilePage,
  updateProfile,
} = require("../controllers/user.controller");
const { protected } = require("../middlewares/auth");

const router = Router();

router.get("/profile/my", protected, getMyProfile);
router.get("/profile/update", protected, updateProfilePage);
router.post("/profile/update", protected, updateProfile);
router.get("/profile/:id", protected, getUserProfile);

module.exports = router;
