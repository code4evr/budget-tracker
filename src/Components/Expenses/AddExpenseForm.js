import React, { useState } from 'react';
import { useForm } from '../../utils/customHooks';
import { useMutation } from '@apollo/client';
import { ADD_EXPENSE, GET_BUDGETS } from '../../Queries/Queries';
import { BudgetContext } from '../../Context/BudgetContext';

const AddExpenseForm = ({ onclick, budgetId, rem }) => {
  const [errors, setErrors] = useState(null);

  const { handleInputChange, handleSubmit, val } = useForm(
    userBudget,
    {
      name: '',
      cost: '',
    },
  );

  const [newExpense, { loading }] = useMutation(ADD_EXPENSE, {
    update(proxy, result) {
      console.log(result);
      const data = proxy.readQuery({
        query: GET_BUDGETS,
      });
      proxy.writeQuery({
        query: GET_BUDGETS,
        data: {
          ...data,
          getBudgets: {
            ...data.getBudgets,
            expenses: result.data.addExpenses,
          },
        },
      });
    },
    onError(err) {
      console.log(err);
    },
  });

  function userBudget() {
    if (val.cost < rem.remaining) {
      console.log('the rem is ', rem);
      newExpense({ variables: { ...val, budgetId: budgetId } });
    } else {
      console.log('increase your budget');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Cost</label>
        <input
          type="number"
          name="cost"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn-save" onClick={onclick('save')}>
        Save
      </button>
      <button className="btn-cancel" onClick={onclick('cancel')}>
        Cancel
      </button>
    </form>
  );
};

export default AddExpenseForm;
