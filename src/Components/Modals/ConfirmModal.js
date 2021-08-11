import React from 'react';
import { Button, IconButton } from '../Buttons/Buttons';
import { toggleConfirmModal } from '../../Redux/toggleModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { DELETE_BUDGET } from '../../Queries/Queries';
import { FaTimes } from 'react-icons/fa';
import './newBudget.css';

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const budgetVal = useSelector(state => state.del);
  console.log('deleted budgets', budgetVal);
  const toggleVal = useSelector(state => state.modal);
  console.log('confirm modal', toggleVal);
  const handleClick = () => {
    dispatch(
      toggleConfirmModal({
        val: !toggleVal.confirmModal,
      }),
    );
    document.body.style.position = '';
  };

  const [deleteBudget] = useMutation(DELETE_BUDGET, {
    update() {
      dispatch(
        toggleConfirmModal({
          val: !toggleVal.confirmModal,
        }),
      );
      document.body.style.position = '';
    },
    variables: {
      budgetId: [...budgetVal.budgetToDelete],
    },
  });

  return (
    <>
      {toggleVal.confirmModal ? (
        <div className="modal-overlay">
          <div className="__modal">
            <div className="modal__header">
              <IconButton
                onclick={handleClick}
                classname="modal_closeBtn"
                buttonName="close"
                icon={<FaTimes />}
              />
            </div>
            <div className="modal__body">
              <div className="ques">
                Are you sure you want to delete?
              </div>
              <div className="btn-container">
                <Button
                  classname="modal_saveBtn"
                  buttonName="OK"
                  onclick={deleteBudget}
                />
                <Button
                  classname="modal_cancelBtn"
                  buttonName="Cancel"
                  onclick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ConfirmModal;
