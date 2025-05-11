import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb connected ✅ DB host: ${connection.connection.host} `
    );
  } catch (error) {
    console.log("mongodb connection failed ❌ : ", error);
    process.exit(1);
  }
}

export default connectDB;
