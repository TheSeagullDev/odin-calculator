function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(a, b, operand)
{
    a = parseInt(a);
    b = parseInt(b);
    switch (operand)
    {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            return "ERROR";
    }
}

const numbers = "0123456789"

let first = "";
let second = "";
let operand = "";
const display = document.querySelector("#display");


function updateDisplay(value)
{
    if(value === "clear")
    {
        clearDisplay()
    }
    else if(!first && numbers.includes(value))
    {
        first = value;
        display.textContent = first;
    }
    else if(!operand && numbers.includes(value))
    {
        first += String(value);
        display.textContent = first;
    }
    else if(value === "equals" && first && second && operand)
    {
        display.textContent = operate(first, second, operand);
        first = display.textContent;
        second = "";
        operand = "";
    }
    else if(!numbers.includes(value) && first)
    {
        operand = value;
    }
    else if(operand && numbers.includes(value) && !second)
    {
        second = value;
        display.textContent = value;
    }
    else if(operand && numbers.includes(value) && second)
    {
        second += String(value);
        display.textContent = second;
    }
}

function clearDisplay()
{
    first = "";
    second = "";
    operand = "";
    display.textContent = 0;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", () => {
    updateDisplay(button.id);
}))