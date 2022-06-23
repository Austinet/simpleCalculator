let firstNumber = Number(prompt("ENTER THE FIRST NUMBER"));
let operator = prompt("ENTER THE OPERATOR +, *, -, /, %")
let secondNumber = Number(prompt("ENTER THE SECOND NUMBER"));

let result = 0;

if(operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if(operator === "*"){
    result = firstNumber * secondNumber;
}  else if (operator === "/") {
    result = firstNumber / secondNumber;
} else if (operator === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operator")
}

alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)