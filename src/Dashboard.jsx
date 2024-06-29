import React from "react";
import Metrics from "./Metrics";
import Transactions from "./Transactions";
import Reports from "./Reports";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full bg-gray-100">
      <h1 className="w-full bg-white pl-2 h-16 text-3xl font-bold shadow-md mb-6">
        Dashboard
      </h1>
      <div className="w-full p-8 bg-gray-100 overflow-y-auto">
        <Metrics />
        <Transactions />
        <Reports/>
      </div>
    </div>
  );
};

export default Dashboard;
