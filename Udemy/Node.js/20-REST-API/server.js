const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });
app.use(cors());

app.use("/posts", require("./routes/post.route"));

app.listen(3000, () => {
  console.log("Server running on PORT: 3000");
});
