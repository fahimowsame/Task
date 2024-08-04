import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { MdArrowDropDown } from "react-icons/md";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 7000, 8000, 10000, 12000, 9000, 11000, 14000, 9000, 10000, 13000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderRadius: {
          topLeft: 10,
          topRight: 10,
        },
        barThickness: 10,  // Adjust bar thickness to match the design
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-2 text-white">
        <div>Activity</div>
        <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-2xl">
          <div>Weekly</div>
          <MdArrowDropDown />
        </div>
      </div>
      <div style={{ height: 'calc(100% - 40px)' }}>  {/* Adjust height for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
