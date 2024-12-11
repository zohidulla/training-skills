const express = require("express");
const dotenv = require("dotenv");
const hbs = require("express-handlebars");
const session = require("express-session");
const pgStore = require("connect-pg-simple")(session);
const pool = require("./config/db");
const db = require("./models/index");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    store: new pgStore({
      pool: pool,
      tableName: "user_session",
    }),
    secret: "my secret value",
    resave: false,
    saveUninitialized: false,
  })
);

app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/diary", require("./routes/diary.route"));
app.use("/auth", require("./routes/auth.route"));

const start = async () => {
  try {
    const connect = await db.sequelize.sync();
    // const connect = await db.sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
