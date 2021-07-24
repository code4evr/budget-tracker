import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import BudgetCost from './BudgetCost';
import ExpenseList from './ExpenseList';
import AddExpenseFrom from './AddExpenseForm';
import { useParams } from 'react-router-dom';
import { GET_BUDGETS } from '../../Queries/Queries';
import { useQuery } from '@apollo/client';
import { BsPlusCircleFill } from 'react-icons/bs';
import { AuthContext } from '../../Context/AuthContext';
import { calculateRemaining } from '../../utils/helper';
import './expenses.css';

const BudgetComponent = () => {
  // The commented section is using contextAPI
  const { user, timeFrame } = useContext(AuthContext);
  const result = useQuery(GET_BUDGETS);
  const [toggleForm, setToggleForm] = useState(false);

  const id = useParams().id;
  console.log(id);

  const handleClick = handler => e => {
    if (handler === 'add-expense') {
      setToggleForm(!toggleForm);
    } else if (handler === 'cancel') {
      setToggleForm(!toggleForm);
    }
  };

  useEffect(() => {
    if (user) {
      console.log('inside use effect');
      setTimeout(() => {
        window.location.reload();
        console.log('reloaded');
      }, timeFrame);
    }
  }, [user]);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const dataExtract = () => {
    const getBudget = result.data.getBudgets.filter(
      budget => budget.id === id,
    );
    return getBudget;
  };

  let budget = user ? dataExtract() : '';

  return (
    <>
      {user ? (
        <>
          {budget.map(b => (
            <>
              <div className="row align-items-center">
                <div className="col-6">
                  <h1 className="budget-name">
                    {b ? b.title : 'Loading...'}
                  </h1>
                </div>
                <div className="col-6 flex">
                  <Link to="/app/home">
                    <button className="btn-save">Back</button>
                  </Link>
                </div>
              </div>
              <div className="row">
                <BudgetCost
                  budget={b.budgetCost}
                  expenses={b.expenses}
                  rem={calculateRemaining(b.expenses, b.budgetCost)}
                />
              </div>
              <h1>Expenses</h1>
              <div className="row mt-3">
                <div className="col-sm">
                  <input
                    className="col-sm-12 form-control"
                    type="search"
                    name="item-search"
                    id="item-search"
                    placeholder="search"
                  />
                </div>
                {b.expenses ? (
                  <div className="col-sm-12 mt-3 mb-3">
                    <ExpenseList expenses={b.expenses} />
                    {toggleForm ? (
                      <AddExpenseFrom
                        onclick={handleClick}
                        budgetId={b.id}
                        rem={calculateRemaining(
                          b.expenses,
                          b.budgetCost,
                        )}
                      />
                    ) : (
                      <div className="row mt-3 d-flex justify-content-center">
                        <div
                          className="col-sm-12 d-flex align-items-center create-budget"
                          onClick={handleClick('add-expense')}
                        >
                          <span>
                            <BsPlusCircleFill />
                          </span>
                          <span className="pl-2 pt-1">
                            Add Expense
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="row mt-5 ml-1 d-flex justify-content-center">
                    <div
                      className="col-sm-10 d-flex align-items-center create-budget"
                      onClick={handleClick('new-expense')}
                    >
                      <span>
                        <BsPlusCircleFill />
                      </span>
                      <span className="pl-2 pt-1">Add Expense</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default BudgetComponent;
