import React, { useEffect } from 'react';
import Button from './Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../Redux/toggleModalSlice';
import { FaTimes } from 'react-icons/fa';
import './newBudget.css';

const NewBudget = () => {
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.modal);
  console.log(toggleVal);

  const handleClick = () => {
    dispatch(
      toggleModal({
        val: !toggleVal.toggle,
      }),
    );

    document.body.style.position = '';
  };

  return (
    <>
      {toggleVal.toggle ? (
        <div className="modal-overlay">
          <div className="__modal">
            <div className="modal__header">
              <span>New Budget</span>
            </div>
            <div className="modal__body">
              <span>Hello</span>
            </div>
            <div className="modal__footer">
              <Button
                onclick={handleClick}
                classname="close"
                buttonName="Close"
                faTimes={<FaTimes />}
              />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default NewBudget;
