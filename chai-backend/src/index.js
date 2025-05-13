import connectDb from "./db/index.js";
import dotenv from "dotenv";
import {app} from "./app.js"
dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error in : ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `Your app is running on https://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("Mongodb connection failed : !! : ", error);
  });
