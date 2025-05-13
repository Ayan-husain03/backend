import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n From db Mongodb connect !! DB Host : ${connection.connection.host}`
    );
  } catch (error) {
    console.error("Mongodb connection failed : ", error);
    process.exit(1);
  }
};

export default connectDb;
