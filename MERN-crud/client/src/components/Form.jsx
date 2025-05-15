import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { empBaseUrl } from "../APi/axiosInstance";
import { useNavigate } from "react-router";
import { EmployeeContext } from "../context/EmpContext";
import Button from "./Button";

function Form() {
  const { selectedEmp } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    salary: 0,
    address: "",
    status: "",
    dateOfJoining: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    console.log(formData);
    const values = Object.values(formData);
    const isEmpty = values.some(
      (value) => value === "" || value === undefined || value === null
    );

    e.preventDefault();
    try {
      if (!selectedEmp) {
        if (isEmpty) {
          alert("All fields are required ✏️");
          return;
        }
        const { data } = await empBaseUrl.post("/add-employee", formData);
        if (data?.success) alert(data?.message);
        navigate("/home");
      } else {
        const { data } = await empBaseUrl.put(
          `/update-employee/${formData.id}`,
          formData
        );
        if (data?.success) alert(data?.message);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error adding new Employee", error);
    }

    setFromData({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      salary: 0,
      address: "",
      status: "",
      dateOfJoining: "",
    });
  };
  useEffect(() => {
    if (selectedEmp) {
      setFromData({
        id: selectedEmp._id,
        name: selectedEmp.name || "",
        email: selectedEmp.email || "",
        phone: selectedEmp.phone || "",
        department: selectedEmp.department || "",
        salary: selectedEmp.salary || 0,
        address: selectedEmp.address || "",
        status: selectedEmp.status || "",
        dateOfJoining: selectedEmp.dateOfJoining || "",
      });
    }
  }, [selectedEmp]);
  return (
    <>
      <form action="" method="post" className="form" onSubmit={handleSubmit}>
        <Input
          placeholder="Enter name"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
        />
        <Input
          placeholder="abc@gmail.com"
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <Input
          placeholder="+91123456789"
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleFormChange}
        />
        <Input
          placeholder="department"
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleFormChange}
        />
        <Input
          placeholder="₹000"
          label="Salary"
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleFormChange}
        />
        <Input
          placeholder="Enter address"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleFormChange}
        />
        <div>
          <label htmlFor="" className="label">
            Status
          </label>
          <select
            name="status"
            id=""
            className="input"
            value={formData.status}
            onChange={handleFormChange}
          >
            <option value="">--Select--</option>
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
            <option value="On Leave">On leave</option>
          </select>
        </div>
        <Input
          placeholder="joining data"
          type="date"
          label="Joining Date"
          name="dateOfJoining"
          value={formData.dateOfJoining}
          onChange={handleFormChange}
        />

        <Button type="submit" className="submit">
          {selectedEmp ? "Update" : "Submit"}
        </Button>
      </form>
    </>
  );
}

export default Form;
