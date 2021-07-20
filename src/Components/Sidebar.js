import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleBudgetModal,
  toggleExpenseModal,
} from '../Redux/toggleModalSlice';
import { Link } from 'react-router-dom';
import { BsFillHouseFill } from 'react-icons/bs';
import {
  FaReceipt,
  FaChartPie,
  FaFileInvoiceDollar,
} from 'react-icons/fa';

const Sidebar = props => {
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.modal);
  console.log(toggleVal);
  const handleClick = handler => e => {
    if (handler === 'newBudget') {
      dispatch(
        toggleBudgetModal({
          val: !toggleVal.toggleBudget,
        }),
      );

      document.body.style.position = 'fixed';
    } else if (handler === 'newExpense') {
      dispatch(
        toggleExpenseModal({
          val: !toggleVal.toggleExpense,
        }),
      );

      document.body.style.position = 'fixed';
    }
  };
  return (
    <>
      <div className="sidebar-brand">
        <p>Budgetree</p>
      </div>
      <ul className="sidebar-menu">
        <Link className="sidebar-item" to="/app/home">
          <span>
            <BsFillHouseFill />
          </span>
          <span>Home</span>
        </Link>
        <Link
          className="sidebar-item"
          onClick={handleClick('newBudget')}
        >
          <span>
            <FaFileInvoiceDollar />
          </span>
          <span>New Budget</span>
        </Link>
        <Link
          className="sidebar-item"
          onClick={handleClick('newExpense')}
        >
          <span>
            <FaReceipt />
          </span>
          <span>Add Expense</span>
        </Link>
        <Link to="/app/analytics" className="sidebar-item">
          <span>
            <FaChartPie />
          </span>
          <span>Analytics</span>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
