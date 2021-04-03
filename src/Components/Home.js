import React, { useState } from 'react';
import AddBudgetImg from '../assets/undraw_new_entries_nh3h.svg';
import { BsPlusCircleFill } from 'react-icons/bs';
import NewBudget from './NewBudget';

const Home = () => {
  const [bool, setBool] = useState(false);
  let d = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const currentDate = d.getDate();
  const currentDay = d.getDay();
  const currentMonth = d.getMonth();
  const currentYear = d.getFullYear();

  const today =
    days[currentDay] +
    ' ' +
    currentDate +
    ' ' +
    months[currentMonth] +
    ' ' +
    currentYear;

  console.log(today);

  const createBudgetForm = () => {
    return (
      <div className="create-budget">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Eg: Office Budget"
          />
        </div>
        <button className="btn btn-secondary">create</button>
        <button className="btn btn-warning">cancel</button>
      </div>
    );
  };

  const handleClick = () => {
    setBool(!bool);
  };
  return (
    <div className="row mt-3">
      <div className="col-sm-12">
        <div className="today">
          <span>Today</span>{' '}
          <span className="date-today">{today}</span>
        </div>
        {!bool ? (
          <div
            className="mt-2 d-flex align-items-center create-budget"
            onClick={handleClick}
          >
            <span>
              <BsPlusCircleFill />
            </span>
            <span className="pl-2 pt-1">Create New Budget</span>
          </div>
        ) : (
          ''
        )}
        {bool ? (
          createBudgetForm()
        ) : (
          <div className="img-container d-flex justify-content-center align-items-center">
            <img
              src={AddBudgetImg}
              alt="add-budget"
              className="add-budget"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
