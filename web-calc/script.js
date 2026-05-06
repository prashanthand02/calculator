// functions for each basic math operator

function add(firstNum , secondNum) {return firstNum + secondNum};
function sub(firstNum , secondNum) {return firstNum - secondNum};
function mul(firstNum , secondNum) {return firstNum * secondNum};
function div(firstNum , secondNum) {return firstNum / secondNum};

// variables for each part of the operation
let firstNum = 0;
let secondNum = 0;
let operand;

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
};

// function to update the first number and display the numbers when clicked
const nums = document.querySelectorAll(`.nums`);
const display = document.getElementById(`display`);
display.textContent = ``;

function updateFirstNum() {
    firstNum = Number(display.textContent);
};

// function to update operator and display the numbers when clicked
const signs = document.querySelectorAll(`.operators`);
function updateOperator(){
    signs.forEach(sign => {
        sign.addEventListener(`click`, () => {
            display.innerHTML = ``;
            display.append(sign.textContent);
            operand = sign.textContent;
        })
    })    
};
updateOperator();

// function to update the second number and display the numbers when clicked
function updatSecondNum() {
    secondNum = Number(display.textContent.slice(1));
};

nums.forEach(num => {
    num.addEventListener(`click`, () => {
        display.append(num.textContent);
        if (operand === undefined){
            updateFirstNum();
        } else {
            updatSecondNum();
        }  
    }) 
});