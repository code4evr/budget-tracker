import React from 'react';
import {
  FaGripVertical,
  FaPencilAlt,
  FaRegTrashAlt,
} from 'react-icons/fa';

const BudgetTab = props => {
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-sm-10 d-flex b-container justify-content-between">
        <div className="budget-info d-flex">
          <FaGripVertical size="1.5rem" className="mx-1" />
          <input
            type="radio"
            name="budget-check"
            id="budget-check"
            className="budget-radio form-control"
          />
          <div className="budget-heading pl-1">
            {props.budgetname}
          </div>
        </div>
        <div className="budget-edits d-flex">
          <FaPencilAlt />
          <FaRegTrashAlt />
        </div>
      </div>
    </div>
  );
};

export default BudgetTab;
