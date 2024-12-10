const User = require("../models/users");
const pool = require("../config/db");

const getMainPage = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("main", {
      title: "User list",
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserPageByUid = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("user-page", {
      title: user.username,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMainPage,
  getUserPageByUid,
};
