import React from "react";

const Metrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold">Total Users</h3>
        <p className="text-3xl">+20</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold">Total Employees</h3>
        <p className="text-3xl">+27</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold">Total Transactions</h3>
        <p className="text-3xl">+$10,000</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold">Total Expenses</h3>
        <p className="text-3xl">+$2900</p>
      </div>
    </div>
  );
};

export default Metrics;
