import React from 'react';
import { Link } from 'react';
import { BsFillHouseFill } from 'react-icons/bs';
import {
  FaReceipt,
  FaChartPie,
  FaFileInvoiceDollar,
} from 'react-icons/fa';

const Sidebar = props => {
  return (
    <div
      className={
        props.val
          ? 'sidebar-container bg-light hide-sidebar'
          : 'sidebar-container bg-light'
      }
    >
      <div className="sidebar-brand">
        <h1>Dashboard</h1>
      </div>
      <ul className="sidebar-list mt-4">
        <li className="sidebar-item d-flex">
          <span>
            <BsFillHouseFill />
          </span>
          <span className="pl-2">Home</span>
        </li>
        <li className="sidebar-item d-flex">
          <span>
            <FaFileInvoiceDollar />
          </span>
          <span className="pl-2">New Budget</span>
        </li>
        <li className="sidebar-item d-flex">
          <span>
            <FaReceipt />
          </span>
          <span className="pl-2">Add Expense</span>
        </li>
        <li className="sidebar-item d-flex">
          <span>
            <FaChartPie />
          </span>
          <span className="pl-2">Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
