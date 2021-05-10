import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
  console.log({ ...props });
  return (
    <ul className="list-group">
      {props.expenses
        ? props.expenses.map(ex => (
            <ExpenseItem key={ex.id} name={ex.name} val={ex.cost} />
          ))
        : ''}
    </ul>
  );
};

export default ExpenseList;
