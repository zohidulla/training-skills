const express = require("express");
const path = require("path");

const app = express();

/*
// pug template engine
app.set("view engine", "pug");
*/

/*
// handlebars template engine
const { engine } = require("express-handlebars");
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
*/

// ejs template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const userRouters = require("./routes/users");
const mainRouters = require("./routes/main");

app.use("/users", userRouters.router);
app.use(mainRouters);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { title: "Page not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
