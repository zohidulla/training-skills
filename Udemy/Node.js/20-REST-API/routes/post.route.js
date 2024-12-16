const { Router } = require("express");
const {
  getAllPosts,
  addNewPost,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

const router = Router();

router.get("/all", getAllPosts);
router.post("/add", addNewPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
