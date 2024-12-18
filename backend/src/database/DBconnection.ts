import mongoose from "mongoose";
import "dotenv/config";

const url = process.env.DB_BASE_URL || "";

mongoose.set("strictQuery", true);

const doConnectBase = async (boolean = true) => {
  mongoose.connection.on("error", (err) => console.log("DB error", err));

  if (boolean) {
    mongoose.connection.on("connected", () => console.log("DB connected"));
    try {
      return await mongoose.connect(url);
    } catch (error) {
      console.error(error);
    }
  } else {
    mongoose.connection.on("close", () => console.log("DB connection closed"));
    try {
      return await mongoose.disconnect();
    } catch (error) {
      console.error(error);
    }
  }
};

export default doConnectBase;
