const path = require("path");
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database(
  path.resolve(__dirname, "..", "database", "posts.db"),
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) throw err;
  }
);

const getAllPosts = (req, res) => {
  const posts = db.all("SELECT * FROM post", [], (err, rows) => {
    if (err) throw err;
    res.status(200).json(rows);
  });
};

const addNewPost = (req, res) => {
  const post = db.run(
    `INSERT INTO post(title, post) VALUES (?, ?) RETURNING *`,
    [req.body.title, req.body.post]
  );
  res.status(201).send("Data successfully added");
};

const getPostById = (req, res) => {
  db.all(`SELECT * FROM post WHERE id = ${req.params.id}`, [], (err, rows) => {
    if (err) throw err;
    if (!rows[0]) {
      return res.status(404).send("Post not found");
    }
    return res.status(200).json(rows[0]);
  });
};

const updatePost = (req, res) => {
  db.run(
    "UPDATE post SET title = ?, post = ? WHERE id = ?",
    [req.body.title, req.body.post, req.params.id],
    (err) => {
      if (err) throw err;
      res.status(200).send("Data successfully updated");
    }
  );
};

const deletePost = (req, res) => {
  db.run("DELETE FROM post WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.status(200).send("Post successfully deleted");
  });
};

module.exports = {
  getAllPosts,
  addNewPost,
  getPostById,
  updatePost,
  deletePost,
};
