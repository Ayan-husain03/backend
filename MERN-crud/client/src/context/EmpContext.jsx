import { createContext, useState } from "react";
import { empBaseUrl } from "../APi/axiosInstance";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [empData, setEmpData] = useState([]);
    const [selectedEmp, setSelectedEmp] = useState(null);
  const fetchAllEmp = async () => {
    const { data } = await empBaseUrl.get("/empList");
    setEmpData(data.Employees);
  };
  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this Employee"
    );
    if (!confirmDelete) return;
    try {
      const { data } = await empBaseUrl.delete(`/${id}`);
      data?.success ? alert(data?.message) : null;
      fetchAllEmp();
    } catch (error) {
      console.error("Error deleting employee : ", error);
    }
  };
  return (
    <EmployeeContext.Provider
      value={{
        empData,
        setEmpData,
        fetchAllEmp,
        handleDelete,
        selectedEmp,
        setSelectedEmp,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
