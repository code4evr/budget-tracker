import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useQuery } from '@apollo/client';
import { GET_BUDGETS } from '../../Queries/Queries';

const Analytics = () => {
  const { loading, error, data } = useQuery(GET_BUDGETS);

  if (!data) {
    return '';
  }

  console.log(...data.getBudgets[0].expenses);

  const budgetData = {
    labels: data.getBudgets[0].expenses.map(expense => expense.name),
    datasets: [
      {
        label: 'Expenses',
        backgroundColor: ['#507d83'],
        hoverBackgroundColor: ['#486c72'],
        data: data.getBudgets[0].expenses.map(
          expense => expense.cost,
        ),
      },
    ],
  };

  return (
    <div style={{ width: '90%' }}>
      <Bar data={budgetData} />
    </div>
  );
};

export default Analytics;
