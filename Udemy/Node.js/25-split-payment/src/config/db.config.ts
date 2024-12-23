import mongoose from "mongoose";

import { environments } from "@/config/environment.config";

export class MongoConnect {
  public init = async (): Promise<void> => {
    const connect = await mongoose.connect(environments.MONGO_URI);

    console.log(`Mongodb connected to ${connect.connection?.host}`);
  };
}
