import express from "express";

import { environments } from "@/config/environment.config";
import { MongoConnect } from "@/config/db.config";

import indexRoute from "@/routes";
import { errorHandler } from "@/middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", indexRoute);

app.use(errorHandler);

const start = async () => {
  const mongoConnect = new MongoConnect();
  await mongoConnect.init();

  const port = environments.PORT;
  app.listen(port, () => console.log(`Server running on port: ${port}`));
};

start();
