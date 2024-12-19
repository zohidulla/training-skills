const { userService } = require("../services");

const register = async (req, res) => {
  try {
    const { phone, password, fullname } = req.body;

    if (!phone || !password || !fullname) {
      req.flash("error", "All fields are required");
      return res.redirect("/register");
    }

    const body = { phone, password, fullname };

    await userService.register(req, res, body);
  } catch (error) {
    console.log(error);
  }
};

const registerPage = (req, res) => {
  res.render("register", {
    title: "Register page",
    error: req.flash("error")[0],
  });
};

const verify = async (req, res) => {
  try {
    const { code } = req.body;

    await userService.verify(req, res, { code });
  } catch (error) {
    console.log(error);
  }
};

const verifyPage = (req, res) => {
  res.render("verify", {
    title: "Verify page",
    error: req.flash("error")[0],
  });
};

const loginPage = (req, res) => {
  res.render("login", {
    title: "Login page",
    error: req.flash("error")[0],
  });
};

module.exports = {
  register,
  registerPage,
  verify,
  verifyPage,
  loginPage,
};
