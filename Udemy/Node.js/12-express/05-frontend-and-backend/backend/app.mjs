import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// logs info about request
app.use(morgan("tiny"));
// converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// converts from data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));
// enable all CORS requests
app.use(cors());

app.use((req, res) => {
  const personData = {
    name: "Alex",
    isInstructor: true,
  };
  console.log(req.body);
  return res.json(personData);
});

app.listen(5000, () => console.log("Server is listening at port 5000"));
