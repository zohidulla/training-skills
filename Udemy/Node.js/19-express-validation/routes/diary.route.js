const { Router } = require("express");
const {
  getMyDiary,
  getAllDiary,
  addNewDiary,
  getDiaryById,
  editDiary,
  updateDiary,
  deleteDiary,
  addCommentToDiary,
} = require("../controllers/diary.controller");
const { protected } = require("../middlewares/auth");
const { body, check } = require("express-validator");
const upload = require("../utils/fileUpload");

const router = Router();

router.get("/my", protected, getMyDiary);
router.get("/all", protected, getAllDiary);
router.post(
  "/add",
  upload.single("imageUrl"),
  body("text", "Please add at least 3 characters to your diary").isLength({
    min: 3,
  }),
  protected,
  addNewDiary
);
router.get("/:id", protected, getDiaryById);
router.get("/update/:id", protected, editDiary);
router.post("/update/:id", protected, updateDiary);
router.post("/delete/:id", protected, deleteDiary);
router.post("/comment/:id", protected, addCommentToDiary);

module.exports = router;
