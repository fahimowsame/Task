import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.62', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78989215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const getStatusClasses = (status) => {
  if (status === 'Delivered') {
    return 'bg-green-500 text-white';
  } else if (status === 'Cancelled' || status === 'Pending') {
    return 'bg-red-500 text-white';
  }
  return '';
};

const OrderList = () => (
  <div className="bg-gray-700 p-4 rounded-lg h-full ">
    <div className="text-lg font-semibold">Recent Orders</div>
    <div className="mt-4">
      <div className="flex justify-between items-center font-semibold">
        <div>Customer</div>
        <div>Order No</div>
        <div>Amount</div>
        <div>Status</div>
      </div>
      <hr className="border-gray-600 my-2" />
      {orders.map(order => (
        <React.Fragment key={order.orderNo}>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <FaUserCircle className="mr-2" />
              {order.customer}
            </div>
            <div>{order.orderNo}</div>
            <div>{order.amount}</div>
            <div className={`px-2 py-1 rounded ${getStatusClasses(order.status)}`}>
              {order.status}
            </div>
          </div>
          <hr className="border-gray-600 my-2" />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default OrderList;
