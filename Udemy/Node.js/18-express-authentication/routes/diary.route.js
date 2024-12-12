const { Router } = require("express");
const {
  getMyDiary,
  addNewDiary,
  getDiaryById,
  editDiary,
  updateDiary,
  deleteDiary,
  addCommentToDiary,
} = require("../controllers/diary.controller");

const router = Router();

router.get("/my", getMyDiary);
router.post("/add", addNewDiary);
router.get("/:id", getDiaryById);
router.get("/update/:id", editDiary);
router.post("/update/:id", updateDiary);
router.post("/delete/:id", deleteDiary);
router.post("/comment/:id", addCommentToDiary);

module.exports = router;
