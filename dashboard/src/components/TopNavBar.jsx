import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaBars } from 'react-icons/fa';
import { MdOutlineSettings } from "react-icons/md";

const TopNavBar = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">Logo</div>
      <div className="flex items-center space-x-6 cursor-pointer">
        <FaEnvelope className="text-2xl" />
        <MdOutlineSettings className="text-2xl" />
        <FaBell className="text-2xl" />
        <FaUserCircle className="text-2xl" />
        <div className="md:hidden">
          <FaBars className="text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
