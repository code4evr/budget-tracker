import React, { useRef, useEffect } from 'react';
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
  const checkboxRef = useRef(null);
  console.log(checkboxRef);
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.utility);
  console.log(toggleVal);
  const handleInputChange = e => {
    if (toggleVal.isIndeterminate) {
      dispatch(
        clickCheckbox({
          ...toggleVal,
          isIndeterminate: false,
          toggleUtility: false,
          isChecked: false,
        }),
      );
    } else {
      dispatch(
        clickCheckbox({
          ...toggleVal,
          toggleUtility: !toggleVal.toggleUtility,
          isChecked: !toggleVal.isChecked,
        }),
      );
    }
  };

  useEffect(() => {
    console.log(checkboxRef);
    console.log(toggleVal.isIndeterminate);
    if (toggleVal.isIndeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    } else {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    }
  }, [toggleVal.isIndeterminate]);

  return (
    <>
      <div className="row utility-bar">
        <div className="form-check checkbox-container">
          <input
            type="checkbox"
            name="checkbox"
            className="form-check-input"
            onChange={handleInputChange}
            ref={checkboxRef}
          />
          {toggleVal.isChecked || toggleVal.isIndeterminate ? (
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
          ) : (
            ''
          )}
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
