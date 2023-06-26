# 0x00-ES6_basic
- Learning Objectives
- At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    - What ES6 is
    - New features introduced in ES6
    - The difference between a constant and a variable
    - Block-scoped variables
    - Arrow functions and function parameters default to them
    - Rest and spread function parameters
    - String templating in ES6
    - Object creation and their properties in ES6
    - Iterators and for-of loops

- Requirements
- General
    - All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
    - Allowed editors: vi, vim, emacs, Visual Studio Code
    - All your files should end with a new line
    - A README.md file, at the root of the folder of the project, is mandatory
    - Your code should use the js extension
    - Your code will be tested using the Jest Testing Framework
    - Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
    - All of your functions must be exported

# Tasks

## 0. [Const or let?](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/0-constants.js)
    - Modify
        - function taskFirst to instantiate variables using const
        - function taskNext to instantiate variables using let
```js
export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
    }

    export function getLast() {
    return ' is okay';
    }

    export function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();

    return combination;
    }
```
## 1. [Block Scope](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/1-block-scoped.js)
    - Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
```javascript
export default function taskBlock(trueOrFalse) {
    var task = false;
    var task2 = true;

    if (trueOrFalse) {
        var task = true;
        var task2 = false;
    }

    return [task, task2];
    }
```
## 2. [Arrow functions](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/2-arrow.js)
    - Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)
    
```js
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = function add(newNeighborhood) {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
    }
```

## 3. [Parameter defaults](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/3-default-parameter.js)
    - Condense the internals of the following function to 1 line - without changing the name of each function/variable.
    - Hint: The key here to define default parameter values for the function parameters.
```js
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

## 4. [Rest parameter syntax for functions](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/4-rest-parameter.js)
    - Modify the following function to return the number of arguments passed to it using the rest parameter syntax
```js
export default function returnHowManyArguments(...numOfArgs) {
  /* eslint-disable */
  return numOfArgs.length;
}
```

## 5. [The wonders of spread syntax](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/5-spread-operator.js)
    - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.
```js
export default function concatArrays(array1, array2, string) {
  /* eslint-disable */
  return [].concat(...array1, ...array2, ...string);
}
```

## 6. [Take advantage of template literals](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/6-string-interpolation.js)
    - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.
```js
export default function getSanFranciscoDescription() {
  /* eslint-disable */
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

## 7. [Object property value shorthand syntax](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/7-getBudgetObject.js)
    - Notice how the keys and the variable names are the same?
    - Modify the following function’s budget object to simply use the keyname instead.
```js
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

## 8. [No need to create empty objects before adding in properties](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/8-getBudgetCurrentYear.js)
    - Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

```js
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

## 8. [ES6 method properties](https://github.com/gama1221/alx-frontend-javascript/blob/main/0x00-ES6_basic/9-getFullBudget.js)
    - Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
```js
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```





## Author
# Getinet [LinkedIn](https://www.linkedin.com/in/getinet-mekonnen/)