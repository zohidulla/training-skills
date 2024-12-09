const User = require("../models/users");

const getMainPage = (req, res) => {
  const users = User.findAll();
  res.render("main", {
    title: "User list",
    users,
  });
};

const getUserPageByUid = (req, res) => {
  const user = User.findByUid(req.params.uid);
  res.render("user-page", {
    title: user.username,
    user,
  });
};

module.exports = {
  getMainPage,
  getUserPageByUid,
};
