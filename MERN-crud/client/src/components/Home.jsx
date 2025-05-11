import React, { useContext, useEffect, useState } from "react";
import { empBaseUrl } from "../APi/axiosInstance";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { EmployeeContext } from "../context/EmpContext";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const { empData, setEmpData, fetchAllEmp, handleDelete, setSelectedEmp } =
    useContext(EmployeeContext);

  useEffect(() => {
    fetchAllEmp();
  }, []);
  const handleUpdateEmp = (emp) => {
    setSelectedEmp(emp);
    navigate("/add-employee");
  };
  // console.log(empData);
  return (
    <div className="homeDiv">
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Address</th>
            <th>Status</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {empData?.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.address}</td>
              <td>{emp.status}</td>
              <td>{emp.dateOfJoining}</td>
              <td className="actions">
                <span onClick={() => handleDelete(emp._id)} className="delete">
                  <MdDelete />
                </span>
                <span className="edit" onClick={() => handleUpdateEmp(emp)}>
                  <RiEdit2Fill />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

// const fetchAllEmp = async () => {
//   const { data } = await empBaseUrl.get("/empList");
//   setEmpData(data.Employees);
//   console.log(data);
// };
// const handleDelete = async (id) => {
//   const confirmDelete = confirm(
//     "Are you sure you want to delete this Employee"
//   );
//   if (!confirmDelete) return;
//   try {
//     const { data } = await empBaseUrl.delete(`/${id}`);
//     data?.success ? alert(data?.message) : null;
//     fetchAllEmp();
//   } catch (error) {
//     console.error("Error deleting employee : ", error);
//   }
// };
