const db = require("../models/index");
const User = db.user;
const Diary = db.diary;

const getUserProfile = async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id }, raw: true });
  const diaries = await Diary.findAll({
    where: { userId: user.id },
    raw: true,
  });
  try {
    res.render("user/profile", {
      title: user.name,
      user: user,
      diariesLength: diaries.length,
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const getMyProfile = async (req, res) => {
  const user = req.session.user;
  const diaries = await Diary.findAll({
    where: { userId: user.id },
    raw: true,
  });
  try {
    res.render("user/myprofile", {
      title: user.name,
      user: user,
      diariesLength: diaries.length,
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProfilePage = async (req, res) => {
  const user = req.session.user;
  try {
    res.render("user/update-profile", {
      title: user.name,
      user: user,
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.session.user.id },
      raw: true,
    });
    if (req.body.email === user.email) {
      return res.redirect("/user/profile/update");
    }
    const newDetails = await User.update(
      {
        email: req.body.email,
        name: req.body.name,
      },
      {
        where: { id: req.session.user.id },
        returning: true,
        raw: true,
        plain: true,
      }
    );
    req.session.user = newDetails[1];
    req.session.save((err) => {
      if (err) throw err;
      return res.redirect("/user/profile/my");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserProfile,
  getMyProfile,
  updateProfilePage,
  updateProfile,
};
