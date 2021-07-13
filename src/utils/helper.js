export const calculateRemaining = (expenses, budget) => {
  console.log(budget);
  let spent = 0;
  if (expenses.length > 0) {
    let ex = [];
    expenses.forEach(expense => {
      ex.push(Number(expense.cost));
    });

    spent = ex.reduce(
      (accumulator = 0, currentValue) => accumulator + currentValue,
    );
  }
  return { spent: spent, remaining: Number(budget) - spent };
};
