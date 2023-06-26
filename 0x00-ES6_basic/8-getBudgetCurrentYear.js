function getCurrentYear() {
    /* eslint-disable */
    const date = new Date();
    return date.getFullYear();
  }
  
  export default function getBudgetForCurrentYear(income, gdp, capita) {
    /* eslint-disable */
    const budget = new Object();
  
    budget[`income-${getCurrentYear()}`] = income;
    budget[`gdp-${getCurrentYear()}`] = gdp;
    budget[`capita-${getCurrentYear()}`] = capita;
  
    return budget;
  }

  const t = getBudgetForCurrentYear(100,200,300);
  console.log(t);