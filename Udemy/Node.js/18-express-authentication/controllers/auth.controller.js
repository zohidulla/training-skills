const db = require("../models/index");
const bcrypt = require("bcryptjs");
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

const loginUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      const mathPassword = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (mathPassword) {
        req.session.isLogged = true;
        req.session.user = userExist;
        req.session.save((err) => {
          if (err) throw err;
          return res.redirect("/diary/my");
        });
      } else {
        return res.redirect("/auth/login");
      }
    } else {
      return res.redirect("/auth/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/auth/login");
  });
};

const getRegisterPage = async (req, res) => {
  try {
    res.render("auth/registration", {
      title: "Registration",
    });
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, name, password, password2 } = req.body;
    if (password !== password2) {
      return res.redirect("/auth/registration");
    }
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      return res.redirect("/auth/registration");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({
      email,
      name,
      password: hashedPassword,
    });
    return res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getLoginPage,
  loginUser,
  logout,
  getRegisterPage,
  registerUser,
};
