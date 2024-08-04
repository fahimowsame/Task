import React, { useState } from 'react';
import ChartComponent from './ChartComponent';
import FeedbackList from './FeedbackList';
import InfoCard from './InfoCard';
import OrderList from './OrderList';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import { IoMdArrowDropup } from 'react-icons/io';
import { BiTargetLock } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import './style.css';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      {isSidebarVisible && (
        <div className="w-16 md:hidden fixed top-0 left-0 z-50 bg-gray-800 h-full">
          <Sidebar />
        </div>
      )}
      <div className="w-16 hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <TopNavBar toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-4">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[800px] gap-4 w-full md:w-auto">
                <InfoCard title="Total Orders" value="75" icon="orders" trend={3} iconBgColor="bg-blue-500" />
                <InfoCard title="Total Delivered" value="70" icon="delivered" trend={-3} iconBgColor="bg-green-500" />
                <InfoCard title="Total Cancelled" value="5" icon="cancelled" trend={3} iconBgColor="bg-red-500" />
                <InfoCard title="Total Revenue" value="$12k" icon="revenue" trend={-3} iconBgColor="bg-yellow-500" />
              </div>
              <div className='flex justify-between bg-gray-700 mt-4 p-4 rounded-lg md:w-[350px] w-full'>
                <div className='mr-2 flex flex-col'>
                    <p className='text-sm mb-2'>Net Profit</p>
                    <p className='text-3xl mb-2 font-bold'>$6759.25</p>
                    <div className='flex text-green-500'>
                        <IoMdArrowDropup />
                        <p>3%</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className="relative flex items-center justify-center w-28 h-28">
                    <div className="absolute w-full h-full rounded-full border-8 border-gray-400"></div>
                    <div className="absolute w-full h-full rounded-full border-8 border-red-600" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 50% 50%, 50% 100%, 0% 100%)',}}></div>
                    <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full">
                        <span className="text-2xl text-white">70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold mt-4">Activity</div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mt-4 bg-gray-700 p-4 rounded-lg w-full md:w-[800px] h-[250px]">
                <ChartComponent />
              </div>
              <div className='bg-gray-700 mt-4 md:w-[350px] w-full flex flex-col p-6 rounded-lg'>
                <div className='flex justify-between mb-6'>
                  <div className='flex justify-center items-center gap-2'>
                    <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-3xl bg-orange-600'>
                      <BiTargetLock />
                    </div>
                    <h1 className='text-lg'>Goals</h1>
                  </div>
                  <div className='w-8 h-8 flex justify-center items-center rounded-full bg-gray-600 cursor-pointer text-lg'>
                    <MdKeyboardArrowRight/>
                  </div>
                </div>
                <div className='flex justify-between mb-6'>
                  <div className='flex justify-center items-center gap-2'>
                    <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-2xl bg-blue-950'>
                      <FaHamburger />
                    </div>
                    <h1 className='text-lg'>Popular Dishes</h1>
                  </div>
                  <div className='w-8 h-8 flex justify-center items-center rounded-full bg-gray-600 cursor-pointer text-lg'>
                    <MdKeyboardArrowRight/>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center gap-2'>
                    <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center text-2xl bg-sky-800'>
                      <MdDinnerDining />
                    </div>
                    <h1 className='text-lg'>Menus</h1>
                  </div>
                  <div className='w-8 h-8 flex justify-center items-center rounded-full bg-gray-600 cursor-pointer text-lg'>
                    <MdKeyboardArrowRight/>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between ' >
              <div className='w-full md:w-[800px] h-[400px] mt-4'>
                <OrderList />
              </div>
              <div className='bg-gray-700 p-4 rounded-lg md:w-[350px] w-full mt-4  h-[400px] overflow-y-scroll overflow-x-hidden custom-scrollbar'>
                <FeedbackList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
