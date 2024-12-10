const express = require("express");
const router = express.Router();
const {
  getAddUsersPage,
  addNewUser,
  editUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/add-users", getAddUsersPage);
router.post("/users", addNewUser);
router.get("/edit/:id", editUser);
router.post("/edit/:id", updateUser);
router.post("/delete/:id", deleteUser);

exports.router = router;
