import React from 'react';
import { Button, IconButton } from '../Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleExpenseModal } from '../../Redux/toggleModalSlice';
import { FaTimes } from 'react-icons/fa';
import { useForm } from '../../utils/customHooks';
import { useMutation } from '@apollo/client';
import { NEW_BUDGET, GET_BUDGETS } from '../../Queries/Queries';
import './newBudget.css';

const NewExpense = () => {
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
    handleClick();
  }

  const handleClick = e => {
    dispatch(
      toggleExpenseModal({
        val: !toggleVal.toggleExpense,
      }),
    );

    document.body.style.position = '';
  };

  return (
    <>
      {toggleVal.toggleExpense ? (
        <div className="modal-overlay">
          <div className="__modal">
            <div className="modal__header">
              <span>Quick Add New Budget</span>
              <IconButton
                onclick={handleClick}
                classname="modal_closeBtn"
                buttonName="close"
                icon={<FaTimes />}
              />
            </div>
            <div className="modal__body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <select className="form-select">
                    <option value="budget 1">Budget 1</option>
                    <option value="budget 2">Budget 2</option>
                    <option value="budget 3">Budget 3</option>
                  </select>
                  <input
                    type="text"
                    name="title"
                    className="form-control my-3"
                    value={val.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Office Budget"
                  />
                  <input
                    type="number"
                    name="budgetCost"
                    className="form-control"
                    placeholder="e.g., 5000"
                    value={val.budgetCost}
                    onChange={handleInputChange}
                  />
                  <div className="btn-container">
                    <Button
                      classname="modal_saveBtn"
                      buttonName="save"
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

export default NewExpense;
