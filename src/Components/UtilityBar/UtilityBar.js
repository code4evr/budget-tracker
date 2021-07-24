import React from 'react';
import { clickCheckbox } from '../../Redux/toggleUtilityButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  FaTrash,
  FaAngleLeft,
  FaAngleRight,
  FaPlusSquare,
  FaArchive,
} from 'react-icons/fa';
import './utilityBar.css';

const UtilityBar = () => {
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.utility);
  console.log(toggleVal);
  const handleInputChange = e => {
    dispatch(
      clickCheckbox({
        val: !toggleVal.toggleUtility,
      }),
    );
  };
  return (
    <>
      <div className="row utility-bar">
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox"
          />
          <div className="other-utility">
            <div className="utility-btn">
              <FaTrash size="1.3rem" />
            </div>
            <div className="utility-btn">
              <FaPlusSquare size="1.4rem" />
            </div>
            <div className="utility-btn">
              <FaArchive size="1.4rem" />
            </div>
          </div>
        </div>

        <div className="page-control">
          <div className="page-left">
            <FaAngleLeft />
          </div>
          <div className="page-right">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default UtilityBar;
