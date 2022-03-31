// JavaScript

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const brackets = document.querySelector('.brackets')
const persentage = document.querySelector('.percentage')

// console code

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
    });
});

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed');
})

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed');
})

decimal.addEventListener('click', (event) => {
    console.log(event.target.value);
})

brackets.addEventListener('click', (event) => {
    console.log(event.target.value);
})

// persentage.addEventListener('click', (event) => {
//     console.log(event.target.value);
// })

// end console code

const calculatorScreen = document.querySelector('.cal-screen');

const updatesNumber = (number) => {
    calculatorScreen.value = number;
}

const updatesOperator = (operator)=>{
    calculatorScreen.value = operator;
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// function
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber    
    }
    calculationOperator = operator
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;

        case "-":
            result = (prevNumber) - (currentNumber)
            break;

        case "*":
            result = (prevNumber) * (currentNumber)
            break;

        case "/":
            result = (prevNumber) / (currentNumber)
            break;

        case "%":
            result = (prevNumber) / 100
            break;

        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// inputPercentage = (persen) => {
//     if (prevNumber.includes('%')) {
//         return 
//     }
//     prevNumber += persen
// }

inputBrackets = (brackets) => {

    if (currentNumber === '0') {
        currentNumber = ''
        currentNumber.includes(brackets)
        currentNumber += (brackets)
    }
    if (brackets ==='(') {
        event.target.value = ')'
        currentNumber.includes(brackets)
    }
    else{
        event.target.value = '('
        currentNumber.includes(brackets)
        currentNumber += (brackets)
    }
}
// end of function


// display code
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updatesNumber(currentNumber)
    });
});


operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updatesOperator(calculationOperator)
    });
});


equalSign.addEventListener('click', () => {
    calculate();
    updatesNumber(currentNumber)
})

clearBtn.addEventListener('click', () => {
    clearAll()
    updatesNumber(currentNumber)
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updatesNumber(currentNumber)
})

brackets.addEventListener('click', (event) => {
    inputBrackets(event.target.value)
    updatesNumber(currentNumber)
})


// end of display code



