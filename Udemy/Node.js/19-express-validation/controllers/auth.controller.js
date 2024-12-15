const db = require("../models/index");
const bcrypt = require("bcryptjs");
const User = db.user;
const { validationResult } = require("express-validator");

const getLoginPage = async (req, res) => {
  try {
    const isAuthenticated = req.session.isLogged;
    return res.render("auth/login", {
      title: "Login",
      isAuthenticated,
      errorMessage: req.flash("error"),
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const isAuthenticated = req.session.isLogged;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("auth/login", {
        title: "Login",
        isAuthenticated,
        errorMessage: errors.array()[0].msg,
        oldInput: {
          email: req.body.email,
        },
      });
    }
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (userExist) {
      const matchPassword = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (matchPassword) {
        req.session.isLogged = true;
        req.session.user = userExist;
        req.session.save((err) => {
          if (err) throw err;
          return res.redirect("/diary/my");
        });
        req.flash("error", "You entered wrong email or password!");
        return res.status(400).render("auth/login", {
          title: "Login",
          isAuthenticated,
          errorMessage: req.flash("error"),
          oldInput: {
            email: req.body.email,
          },
        });
      }
    } else {
      req.flash("error", "You entered wrong email or password!");
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
      errorMessage: req.flash("error"),
    });
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const { email, name, password, password2 } = req.body;
    const isAuthenticated = req.session.isLogged;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("auth/registration", {
        title: "Registration",
        isAuthenticated,
        errorMessage: errors.array()[0].msg,
        oldInput: {
          email,
          name,
          password,
          password2,
        },
      });
    }
    if (password !== password2) {
      req.flash("error", "Passwords doesn't math");
      return res.redirect("/auth/registration");
    }
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
      req.flash("error", "This email is already registered!");
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
