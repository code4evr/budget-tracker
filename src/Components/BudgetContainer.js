import React, { useContext } from 'react';
import Budget from './Budget';
import { AppContext } from '../Context/AppContext';

const BudgetContainer = () => {
  const { budget } = useContext(AppContext);
  return (
    <>
      <div className="col-sm">
        <Budget
          type="Budget"
          value={budget}
          classes="alert alert-secondary"
        />
      </div>
      <div className="col-sm">
        <Budget
          type="Remaining"
          value={1500}
          classes="alert alert-primary"
        />
      </div>
      <div className="col-sm">
        <Budget
          type="Spent so far"
          value={500}
          classes="alert alert-warning"
        />
      </div>
    </>
  );
};

export default BudgetContainer;
