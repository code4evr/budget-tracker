import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clickCheckbox } from '../../Redux/toggleUtilityButton';
import {
  FaGripVertical,
  FaPencilAlt,
  FaRegTrashAlt,
} from 'react-icons/fa';

const BudgetList = props => {
  return (
    <div className="row mb-3">
      <div className="col-sm-12 budget-info-container">
        <div className="budget-info d-flex">
          <FaGripVertical size="1.15rem" className="drag-button" />
          <input
            type="checkbox"
            onChange={e => props.onchange(e)}
            name={`budget-check-${props.nameAttrib}`}
            id="budget-check"
            className="budget-checkbox form-control"
            checked={props.checked}
          />
          <div className="budget-heading pl-1">
            <Link to={`/app/budget/${props.budgetId}`}>
              {props.budgetname}
            </Link>
          </div>
        </div>
        {/* <div className="budget-edits d-flex justify-content-end">
          <div>
            <FaPencilAlt size="1.15rem" />
          </div>
          <div>
            <FaRegTrashAlt size="1.15rem" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BudgetList;
