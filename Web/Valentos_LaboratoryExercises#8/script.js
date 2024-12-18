//Task #1
let firstValue = prompt("Enter first value (true/false): ").toLowerCase() === "true";
let secondValue = prompt("Enter second value (true/false): ").toLowerCase() === "true";  
let thirdValue = prompt("Enter third value (true/false): ").toLowerCase() === "true";

let result = !firstValue && !secondValue && !thirdValue;
console.log(" Result of negated AND operation: ", result);

//Task #2
firstValue = prompt("Enter first value (true/false): ").toLowerCase() === "true";
secondValue = prompt("Enter second value (true/false): ").toLowerCase() === "true";

let combine = (firstValue && secondValue);
console.log("Result: ", combine);

//Task #3
firstValue = prompt("Enter first value (true/false): ").toLowerCase() === "true";
secondValue = prompt("Enter second value (true/false): ").toLowerCase() === "true";

combine = (firstValue || secondValue);
console.log("Result: ", combine);

//Task #4
firstValue = prompt("Enter first  value (true/false): ").toLowerCase() === "true";
secondValue = prompt("Enter second  value (true/false): ").toLowerCase() === "true";  
thirdValue = prompt("Enter third  value (true/false): ").toLowerCase() === "true";

let ORresult = (firstValue || secondValue);
let ANDresult = (ORresult && thirdValue);
console.log("Result: ", ANDresult);

//Task #5
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

let equalCheck = (num1 === num2);
let gtCheck = (num1 > 0);
let negated = (!equalCheck && !gtCheck);
console.log("Result: ",negated);

//Task #6
let num = parseInt(prompt("Enter a number: "));
let booleanValue = prompt("Enter a boolean value (true/false): ").toLowerCase() === "true";

result = (num > 0) && (booleanValue == true);
console.log("Result: ", result);