const express = require("express");
const dotenv = require("dotenv");
const hbs = require("express-handlebars");
const db = require("./models/index");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use("/diary", require("./routes/diary.route"));

const start = async () => {
  try {
    const connect = await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
