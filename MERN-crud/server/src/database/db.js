const mongoose = require("mongoose");

const dataBaseConnection = () => {
  mongoose
    .connect(`${process.env.DB_URI}/employee`)
    .then(() =>
      console.log(
        "Database connected successfully✅",
        "DB host : ",
        mongoose.connection.host
      )
    )
    .catch((error) => console.error(`Database connection failed ❌ ${error}`));
};

module.exports = dataBaseConnection;
