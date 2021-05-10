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
      <div className="row mt-5 justify-content-center">
        <div className="col-sm-10">
          <div className="create-budget ml-1">
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control col-sm-12"
                placeholder="Eg: Office Budget"
                value={val.title}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="budgetCost"
                className="form-control col-sm-12"
                placeholder="Eg. 200"
                value={val.budgetCost}
                onChange={handleInputChange}
              />
            </div>
            <div className="budget-form-btn">
              <button
                className="btn-save"
                onClick={props.onclick('save')}
              >
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
      </div>
    </form>
  );
};

export default BudgetForm;
