import React, { useState } from "react";
import Placeholder from "./user_149071.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { EmployeesArray } from "./Global";

const Employees = () => {
  const [employees, setEmployees] = useState([...EmployeesArray]);
  const Navigate = useNavigate();

  const handleDelete = (serial) => {
    const index = EmployeesArray.findIndex(
      (employee) => employee.serial === serial
    );
    if (index !== -1) {
      EmployeesArray.splice(index, 1); // Remove the employee from EmployeesArray
      localStorage.setItem("EmployeesArray", JSON.stringify(EmployeesArray));
      setEmployees([...EmployeesArray]); // Update the state with the modified array
    }
  };

  const handleEdit = (serial) => {
    Navigate(`/edit/${serial}`);
  };

  return (
    <div className="flex flex-col w-full bg-gray-100">
      <h1 className="w-full bg-white pl-2 h-16 text-3xl font-bold shadow-md mb-6">
        Employees
      </h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <Link to={"/Newemployees"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              + New Employee
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border-b text-left">Serial</th>
                <th className="py-2 px-4 border-b text-left">Photo</th>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Hospital Name</th>
                <th className="py-2 px-4 border-b text-left">Branch</th>
                <th className="py-2 px-4 border-b text-left">Position</th>
                <th className="py-2 px-4 border-b text-left">Salary</th>
                <th className="py-2 px-4 border-b text-left">Telephone</th>
                <th className="py-2 px-4 border-b text-left">R.Date</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>

{/* <thead>
  <tr>
    <th className="text-left border-4 py-4"> Hospital id</th>
  </tr>
</thead> */}

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.serial} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{employee.serial}</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={
                        employee.photo === "NULL" ? Placeholder : employee.photo
                      }
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{employee.name}</td>
                  <td className="py-2 px-4 border-b">{employee.Hospital}</td>
                  <td className="py-2 px-4 border-b">{employee.branch}</td>
                  <td className="py-2 px-4 border-b">{employee.position}</td>
                  <td className="py-2 px-4 border-b">${employee.salary}</td>
                  <td className="py-2 px-4 border-b">{employee.telephone}</td>
                  <td className="py-2 px-4 border-b">
                    {employee.recruitmentDate}
                  </td>
                  <td className="py-4 px-4 border-b flex items-center space-x-2">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEdit(employee.serial)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(employee.serial)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-gray-600">A list of your recent invoices.</p>
      </div>
    </div>
  );
};

export default Employees;
