import React from 'react';
import { FaShoppingCart, FaTruck, FaTimes, FaDollarSign } from 'react-icons/fa';
import { IoMdArrowDropup } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const icons = {
  orders: FaShoppingCart,
  delivered: FaTruck,
  cancelled: FaTimes,
  revenue: FaDollarSign,
};

const InfoCard = ({ title, value, icon, trend, iconBgColor }) => {
  const IconComponent = icons[icon];
  return (
    <div className="bg-gray-700 p-4 rounded-lg flex flex-col">
      <div className="flex flex-col">
        <div className={`p-2 rounded-xl w-[50px] mb-2 ${iconBgColor}`}>
          <IconComponent className="text-2xl" />
        </div>
        <div>
          <div>{title}</div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-xl font-bold">{value}</div>
            <div className="flex items-center">
              {trend && (
                <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {trend > 0 ? <IoMdArrowDropup /> : <MdArrowDropDown />}
                  <span>{trend > 0 ? '+' : ''}{trend}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
