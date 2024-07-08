import express from "express";
import morgan from "morgan";
// import qs from "querystring";

const app = express();

// logs info about request
app.use(morgan("tiny")); // middleware function1

// converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json()); // middleware function2
// app.use((req, res, next) => {
//   let data = "";
//   req.on("data", (chunk) => (data += chunk));
//   req.on("end", () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });

// converts from data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true })); // middleware function3
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//     let data = "";
//     req.on("data", (chunk) => (data += chunk.toString()));
//     req.on("end", () => {
//       const parsedFormData = qs.parse(data);
//       req.body = parsedFormData;
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.use((req, res) => {
  console.log(req.body);
  return res.send("This is express server");
});

app.listen(5000, () => console.log("Server is listening at port 5000"));
