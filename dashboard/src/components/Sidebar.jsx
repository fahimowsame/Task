import React, { useState } from 'react';
import { FaHome, FaChartBar, FaClipboardList, FaCalendarAlt, FaShoppingBag } from 'react-icons/fa';

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="bg-gray-800 h-full p-4 flex flex-col items-center space-y-6">
      <div
        className={`relative text-2xl cursor-pointer ${activeIcon === 'home' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleIconClick('home')}
      >
        {activeIcon === 'home' && <div className="absolute left-[-12px] w-2 h-full bg-blue-500 rounded-r"></div>}
        <FaHome />
      </div>
      <div
        className={`relative text-2xl cursor-pointer ${activeIcon === 'chart' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleIconClick('chart')}
      >
        {activeIcon === 'chart' && <div className="absolute left-[-12px] w-2 h-full bg-blue-500 rounded-r"></div>}
        <FaChartBar />
      </div>
      <div
        className={`relative text-2xl cursor-pointer ${activeIcon === 'clipboard' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleIconClick('clipboard')}
      >
        {activeIcon === 'clipboard' && <div className="absolute left-[-12px] w-2 h-full bg-blue-500 rounded-r"></div>}
        <FaClipboardList />
      </div>
      <div
        className={`relative text-2xl cursor-pointer ${activeIcon === 'calendar' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleIconClick('calendar')}
      >
        {activeIcon === 'calendar' && <div className="absolute left-[-12px] w-2 h-full bg-blue-500 rounded-r"></div>}
        <FaCalendarAlt />
      </div>
      <div
        className={`relative text-2xl cursor-pointer ${activeIcon === 'shopping' ? 'text-white' : 'text-gray-400'}`}
        onClick={() => handleIconClick('shopping')}
      >
        {activeIcon === 'shopping' && <div className="absolute left-[-12px] w-2 h-full bg-blue-500 rounded-r"></div>}
        <FaShoppingBag />
      </div>
    </div>
  );
};

export default Sidebar;
