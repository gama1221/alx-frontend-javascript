export default function getFullBudgetObject(income, gdp, capita) {
  /* eslint-disable */
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) =>`$${income}`,
    getIncomeInEuros: (income) =>`${income} euros`,
  };

  return fullBudget;
}