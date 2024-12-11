const db = require("../models/index");
const User = db.user;

const getLoginPage = async (req, res) => {
  try {
    const isAuthenticated = req.session.isLogged;
    res.render("auth/login", {
      title: "Login",
      isAuthenticated,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = (req, res) => {
  try {
    // req.setHeader("Set-Cookie", "loggedIn=true");
    req.session.isLogged = true;
    req.session.user = {
      id: 1,
      email: "john@gmail.com",
      name: "john",
      password: "12345",
    };
    req.session.save((err) => {
      if (err) throw err;
      res.redirect("/diary/my");
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/auth/login");
  });
};

module.exports = {
  getLoginPage,
  loginUser,
  logout,
};
