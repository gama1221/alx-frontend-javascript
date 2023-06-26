export default function getFullBudgetObject(income, gdp, capita) {
  /* eslint-disable */
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) =>{
      return `$${income}`;
    },
    getIncomeInEuros: (income) =>{
      return `${income} euros`;
    },
  };

  return fullBudget;
}