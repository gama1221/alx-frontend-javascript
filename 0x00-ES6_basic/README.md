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
    ```js
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

## Author
# Getinet [LinkedIn](https://www.linkedin.com/in/getinet-mekonnen/)