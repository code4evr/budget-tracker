import React from 'react';
import {
  FaTrash,
  FaAngleLeft,
  FaAngleRight,
  FaPlusSquare,
} from 'react-icons/fa';
import './utilityBar.css';

const UtilityBar = () => {
  return (
    <div className="utility-bar">
      <div className="row">
        <div className="utility-container">
          <div className="utility">
            <div className="utility-checkbox">
              <input
                type="checkbox"
                name="check-budget"
                className="form-control"
              />
            </div>
            <div className="other-utilities">
              <div className="delete">
                <FaTrash />
              </div>
              <div className="add">
                <FaPlusSquare />
              </div>
            </div>
          </div>
          <div className="page-control">
            <div className="page-control-left">
              <FaAngleLeft />
            </div>
            <div className="page-control-right">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
