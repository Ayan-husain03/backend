const express = require("express");
const dataBaseConnection = require("./src/database/db.js");
const empRouter = require("./src/routes/employee.routes.js");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

dataBaseConnection();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/employee", empRouter);

app.listen(process.env.PORT || 8000, (error) => {
  console.log(`your server is running on http://localhost:${process.env.PORT}`);
});
