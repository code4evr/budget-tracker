import React, { useEffect } from 'react';
import Button from './Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../Redux/toggleModalSlice';
import { FaTimes } from 'react-icons/fa';
import { useForm } from '../utils/customHooks';
import { useMutation } from '@apollo/client';
import { NEW_BUDGET, GET_BUDGETS } from '../Queries/Queries';
import './newBudget.css';

const NewBudget = () => {
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.modal);
  console.log(toggleVal);

  const { handleInputChange, handleSubmit, val } = useForm(
    userBudget,
    {
      title: '',
      budgetCost: '',
    },
  );

  const [newBudget, { loading }] = useMutation(NEW_BUDGET, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: GET_BUDGETS,
      });
      proxy.writeQuery({
        query: GET_BUDGETS,
        data: {
          ...data,
          getBudgets: [...data.getBudgets, result.data.createBudget],
        },
      });
    },
    onError(err) {
      console.log(err);
    },
  });

  function userBudget() {
    newBudget({ variables: { ...val } });
  }

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
              <span>Quick Add New Budget</span>
              <Button
                onclick={handleClick}
                classname="modal_closeBtn"
                buttonName="Close"
                faTimes={<FaTimes />}
              />
            </div>
            <div className="modal__body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="budget_name"
                    className="form-control my-3"
                    placeholder="e.g., Office Budget"
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    name="budget_value"
                    className="form-control"
                    placeholder="e.g., 5000"
                    onChange={handleInputChange}
                  />
                  <div className="btn-container">
                    <Button
                      classname="modal_saveBtn"
                      buttonName="save"
                      onclick={handleClick}
                    />
                    <Button
                      classname="modal_cancelBtn"
                      buttonName="cancel"
                      onclick={handleClick}
                    />
                  </div>
                </div>
              </form>
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
