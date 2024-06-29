import React from "react";
import PlaceHolder from "./7.jpeg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-80 bg-gray-800 text-white p-3 flex flex-col">
      <div className="flex flex-row profile mb-6">
        <div>
          <img
            src={PlaceHolder}
            alt="Bilan"
            className="w-20 h-20 rounded-full "
          />
        </div>
        <div>
          <h3 className="text-left ml-2 mt-2 text-lg">Drs Amiira</h3>
          <p className="text-left ml-2 text-sm">Admin</p>
          <p className="text-left ml-2 text-sm">Banaadir Hospital</p>
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li className="cursor-pointer">
            <Link to="/">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none">
                Dashboard
              </button>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/employees">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none">
                Employees
              </button>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/reports">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none">
               Reports
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
