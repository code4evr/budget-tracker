import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../Context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map(ex => (
        <ExpenseItem key={ex.id} name={ex.item} val={ex.value} />
      ))}
    </ul>
  );
};

export default ExpenseList;
