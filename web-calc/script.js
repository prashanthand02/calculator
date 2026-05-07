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
    } else if (operator === `x`) {
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
}

nums.forEach(num => {
    num.addEventListener(`click`, () => {
        if (num.textContent === `.`) {
            if (!display.textContent.includes(`.`)) {
                display.append(`.`);
            } 
        } else {
            display.append(num.textContent);
        }

        if (operand === undefined){
            updateFirstNum();
        } else {
            updatSecondNum();
        }  
    }) 
});

// is equal to button
const isEqualTo = document.querySelector(`#isEqualTo`);
isEqualTo.addEventListener(`click`, () => {
    display.innerHTML = ``;
    let sum = operate(firstNum, operand, secondNum);
    display.textContent = sum;
    firstNum = 0;
    firstNum = Number(display.textContent);

    if (operand === `/` && secondNum === 0) {
        display.textContent = "error";
        firstNum = 0;
        secondNum = 0;
        operand = undefined;
    }
})

// clear button
const clearBtn = document.querySelector(`#clear`);
clearBtn.addEventListener(`click`, () => {
    display.innerHTML = ``;
    firstNum = 0;
    secondNum = 0;
    operand = undefined;
})