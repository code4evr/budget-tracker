import React, { useState } from 'react';
import { BudgetContext } from '../../Context/BudgetContext';
import Budget from './Budget';

const BudgetCost = ({ budget, expenses, rem }) => {
  console.log(rem);
  return (
    <>
      <div className="col-sm">
        <Budget
          type="Total"
          value={budget}
          classes="alert alert-secondary"
        />
      </div>
      <div className="col-sm">
        <Budget
          type="Remaining"
          value={rem.remaining}
          classes="alert alert-primary"
        />
      </div>
      <div className="col-sm">
        <Budget
          type="Spent so far"
          value={rem.spent}
          classes="alert alert-warning"
        />
      </div>
    </>
  );
};

export default BudgetCost;
