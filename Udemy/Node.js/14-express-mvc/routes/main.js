const { Router } = require("express");
const router = Router();
const path = require("path");

const { users } = require("./users");

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "views", "main.html"));
  res.render("main", {
    title: "User list",
    users,
  });
});

module.exports = router;
