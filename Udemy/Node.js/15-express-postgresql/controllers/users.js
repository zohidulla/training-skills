const User = require("../models/users");
const pool = require("../config/db");

const getAddUsersPage = (req, res) => {
  res.render("add-users", { title: "Add new user" });
};

const addNewUser = async (req, res) => {
  try {
    const newUSer = new User(req.body.username, req.body.age);
    await newUSer.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  try {
    const user = await pool.query("SELECT * FROM user_info WHERE id = $1", [
      req.params.id,
    ]);
    res.render("edit-user", {
      title: "Edit page",
      user: user.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.body.username,
      req.body.age,
      req.params.id
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAddUsersPage,
  addNewUser,
  editUser,
  updateUser,
  deleteUser,
};
