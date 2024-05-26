const display = document.getElementById('display');
const keys = Array.from(document.getElementsByClassName('key'));

let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

const setNum = (num) => {
    currentNum = currentNum.toString() + num.toString();
    display.value = currentNum;
};

const setOperator = (operator) => {
    if (currentOperator!== null) calculate();
    currentOperator = operator;
    prevNum = currentNum;
    currentNum = '';
};

const calculate = () => {
    let calculation;
    const prev = parseFloat(prevNum);
    const current = parseFloat(currentNum);

    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperator) {
        case '+':
            calculation = prev + current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '*':
            calculation = prev * current;
            break;
        case '/':
            if (current == 0) {
                alert('Cannot divide by zero');
                return;
            }
            calculation = prev / current;
            break;
    }

    result = calculation;
    display.value = result;
    currentNum = result.toString();
    currentOperator = null;
};

const clearDisplay = () => {
    currentNum = '';
    prevNum = '';
    result = null;
    currentOperator = null;
    display.value = '';
};

const backspace = () => {
    currentNum = currentNum.toString().slice(0, -1);
    display.value = currentNum;
};

keys.map(key => {
    key.addEventListener('click', (e) => {
        const keyContent = e.target.innerText;

        if (keyContent === 'C') {
            clearDisplay();
        } else if (keyContent === '←') {
            backspace();
        } else if (keyContent === '+' || keyContent === '-' || keyContent === '*' || keyContent === '/') {
            setOperator(keyContent);
        } else if (keyContent === '=') {
            calculate();
        } else {
            setNum(keyContent);
        }
    });
});