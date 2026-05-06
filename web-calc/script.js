// functions for each basic math operator

function add(firstNum , secondNum) {return firstNum + secondNum};
function sub(firstNum , secondNum) {return firstNum - secondNum};
function mul(firstNum , secondNum) {return firstNum * secondNum};
function div(firstNum , secondNum) {return firstNum / secondNum};

// variables for each part of the operation
let firstNum;
let operand;
let secondNum;

// function for taking the variables and performing operation
function operate(num1, operator, num2) {
    if (operator === `+`){
        return add(num1 , num2);
    } else if (operator === `-`) {
        return sub(num1 , num2);
    } else if (operator === `*`) {
        return mul(num1 , num2);
    }else if (operator === `/`) {
        return div(num1 , num2);
    }
}

