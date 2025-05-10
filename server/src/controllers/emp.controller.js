const Employee = require("../models/emp.model.js");

const handleEmployeeController = async (req, res) => {
  try {
    const body = Object.values(req.body).every(
      (value) =>
        value !== undefined && value !== null && value.toString().trim() !== ""
    );

    console.log(body);
    if (!body) {
      return res
        .status(400)
        .json({ Message: "All fields are required", success: false });
    }
    const newEmp = await Employee.create(req.body);
    console.log(newEmp);
    return res.status(201).json({
      message: "Employee created successfully✅",
      success: true,
      data: newEmp,
    });
  } catch (error) {
    console.log("Error creating new emp : ", error.message);
    return res.status(500).json({ Message: error.message, success: false });
  }
};

const handleEmployeeListController = async (req, res) => {
  try {
    const employee = await Employee.find({});
    return res.status(200).json({
      message: "All employee fetch successfully",
      success: true,
      TotalCount: employee.length,
      Employees: employee,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error fetching employees",
      success: false,
    });
  }
};

const handleEmployeeDeleteController = async (req, res) => {
  const { id } = req.params;
  console.log(req.params.id);
  try {
    const deleteEmp = await Employee.deleteOne({ _id: id });
    if (deleteEmp.acknowledged) {
      return res.status(200).json({
        success: true,
        message: "Employee deleted successfully ✅",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Error deleting employee server error",
      success: false,
    });
  }
};

const handleEmployeeUpdateController = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { id } = req.params;
    const updating = await Employee.updateOne({ _id: id }, { $set: body });
    if (updating?.acknowledged) {
      return res.status(200).json({
        message: "Employee updated successfully",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "Employee not found",
        success: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  handleEmployeeController,
  handleEmployeeListController,
  handleEmployeeDeleteController,
  handleEmployeeUpdateController,
};

// 681ce4380ea2b91cc90ea9dc
