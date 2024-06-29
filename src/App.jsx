import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from ".//Sidebar";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import NewEmployeeLayout from "./NewEmployeeLayout";
import EditEmployeeLayout from "./EditEmployeeLayout";
import Reports from "./Reports";

function App() {
  return (
    <Router>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="w-full  bg-gray-100 overflow-y-auto flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/Newemployees" element={<NewEmployeeLayout />} />
            <Route path="/edit/:serial" element={<EditEmployeeLayout />} />
            <Route path="/reports" element={<Reports/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
