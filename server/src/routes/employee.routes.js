const express = require("express");
const {
  handleEmployeeController,
  handleEmployeeListController,
  handleEmployeeDeleteController,
  handleEmployeeUpdateController,
} = require("../controllers/emp.controller.js");

const router = express.Router();

router.post("/add-employee", handleEmployeeController);
router.get("/empList", handleEmployeeListController);
router.delete("/:id", handleEmployeeDeleteController);
router.put("/update-employee/:id", handleEmployeeUpdateController);

module.exports = router;
