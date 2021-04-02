import React from 'react';
import BudgetContainer from './Components/BudgetContainer';
import ExpenseList from './Components/ExpenseList';
import Navbar from './Components/Navbar';
import AddExpenseForm from './Components/AddExpenseForm';
import Sidebar from './Components/Sidebar';
import { AppContext, AppProvider } from './Context/AppContext';
import './main.css';

const App = () => {
  return (
    <AppProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 bg-light">
            <Sidebar />
          </div>
          <div className="col-sm-10">
            <Navbar />
            <h1 className="mt-3">Budget Planner</h1>
            <div className="mt-3 row">
              <BudgetContainer />
            </div>
            <h1 className="mt-3">Expenses</h1>
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
              <div className="col-sm-12 mt-3 mb-3">
                <ExpenseList />
              </div>
              <div className="col-sm-12">
                <AddExpenseForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
