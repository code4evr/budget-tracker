import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_BUDGET, GET_BUDGETS } from '../../Queries/Queries';
import { useForm } from '../../utils/customHooks';

const BudgetForm = props => {
  const [errors, setErrors] = useState(null);

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

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-4">
        <div className="col-sm-12 create-budget-form">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Eg: Office Budget"
              value={val.title}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="budgetCost"
              className="form-control"
              placeholder="Eg. 200"
              value={val.budgetCost}
              onChange={handleInputChange}
            />
          </div>
          <div className="budget-form-btn">
            <button type="submit" className="btn-save">
              create
            </button>
            <button
              className="btn-cancel"
              onClick={props.onclick('cancel')}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BudgetForm;
