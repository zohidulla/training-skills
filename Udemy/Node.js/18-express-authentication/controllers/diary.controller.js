const { Op } = require("sequelize");
const db = require("../models/index");
const Diary = db.diary;
const Comment = db.comment;
const User = db.user;

const getMyDiary = async (req, res) => {
  try {
    const diaries = await Diary.findAll({
      where: { userId: req.session.user.id },
      raw: true,
      plain: false,
      include: ["user"],
      nest: true,
    });
    res.render("diary/my-diary", {
      title: "My diary",
      diaries: diaries.reverse(),
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllDiary = async (req, res) => {
  try {
    const diaries = await Diary.findAll({
      where: { userId: { [Op.ne]: req.session.user.id } },
      raw: true,
      plain: false,
      include: ["user"],
      nest: true,
    });
    res.render("diary/all-diary", {
      title: "All diary",
      diaries: diaries.reverse(),
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const addNewDiary = async (req, res) => {
  try {
    const { imageUrl, text } = req.body;
    await Diary.create({
      imageUrl: imageUrl,
      text: text,
      userId: req.session.user.id,
    });
    res.redirect("/diary/my");
  } catch (error) {
    console.log(error);
  }
};

const getDiaryById = async (req, res) => {
  try {
    const data = await Diary.findByPk(req.params.id, {
      raw: false,
      plain: true,
      include: ["comment", "user"],
      nest: true,
    });
    const diary = await data.toJSON();
    res.render("diary/one-diary", {
      title: "Diary",
      diary: diary,
      comments: diary.comment.reverse(),
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const editDiary = async (req, res) => {
  try {
    const diary = await Diary.findByPk(req.params.id, {
      raw: true,
    });
    res.render("diary/update-diary", {
      title: "Edit diary",
      diary: diary,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateDiary = async (req, res) => {
  try {
    await Diary.update(
      { text: req.body.text },
      { where: { id: req.params.id } }
    );
    res.redirect("/diary/my");
  } catch (error) {
    console.log(error);
  }
};

const deleteDiary = async (req, res) => {
  try {
    await Diary.destroy({ where: { id: req.params.id } });
    res.redirect("/diary/my");
  } catch (error) {
    console.log(error);
  }
};

const addCommentToDiary = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    await Comment.create({
      name: user.name,
      comment: req.body.comment,
      diaryId: req.params.id,
      userId: user.id,
    });
    res.redirect("/diary/" + req.params.id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMyDiary,
  getAllDiary,
  addNewDiary,
  getDiaryById,
  editDiary,
  updateDiary,
  deleteDiary,
  addCommentToDiary,
};
