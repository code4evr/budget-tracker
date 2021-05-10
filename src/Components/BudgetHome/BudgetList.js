import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGripVertical,
  FaPencilAlt,
  FaRegTrashAlt,
} from 'react-icons/fa';

const BudgetList = props => {
  console.log(props.budgetId);
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-sm-10 budget-info-container">
        <div className="budget-info d-flex">
          <FaGripVertical size="1.15rem" className="mx-1" />
          <input
            type="radio"
            name="budget-check"
            id="budget-check"
            className="budget-radio form-control"
          />
          <div className="budget-heading pl-1">
            <Link to={`/app/budget/${props.budgetId}`}>
              {props.budgetname}
            </Link>
          </div>
        </div>
        <div className="budget-edits d-flex justify-content-end">
          <div>
            <FaPencilAlt size="1.15rem" />
          </div>
          <div>
            <FaRegTrashAlt size="1.15rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetList;
