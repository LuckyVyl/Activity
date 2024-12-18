// Task 1
function strictEquality() {
    const value1 = document.getElementById("task1Value1").value;
    const value2 = document.getElementById("task1Value2").value;
    const result = (value1 === value2) ? "The values are equal." : "The values are not equal.";
    document.getElementById("task1Result").textContent = result;
}

// Task 2
function looseStrictInequality() {
    const value1 = document.getElementById("task2Value1").value;
    const value2 = document.getElementById("task2Value2").value;
    const looseEquality = (value1 == value2);
    const strictInequality = (value1 !== value2);
    console.log(`Loose Equality: ${looseEquality}`);
    console.log(`Strict Inequality: ${strictInequality}`);
    document.getElementById("task2Result").textContent = `Loose Equality: ${looseEquality}, Strict Inequality: ${strictInequality}`;
}

// Task 3
function greaterThanComparison() {
    const num1 = parseFloat(document.getElementById("task3Value1").value);
    const num2 = parseFloat(document.getElementById("task3Value2").value);
    const result = (num1 * 2) > (num2 / 2);
    document.getElementById("task3Result").textContent = `Is first number (x2) greater than second number (÷2)? ${result}`;
}

// Task 4
function greaterThanOrEqualComparison() {
    const num1 = parseInt(document.getElementById("task4Value1").value);
    const num2 = parseInt(document.getElementById("task4Value2").value);
    const result = num1 >= num2;
    document.getElementById("task4Result").textContent = `Is first number greater than or equal to second number? ${result}`;
}

// Task 5
function lessThanComparison() {
    const num1 = parseInt(document.getElementById("task5Value1").value);
    const num2 = parseInt(document.getElementById("task5Value2").value);
    const result = num1 < num2;
    document.getElementById("task5Result").textContent = `Is first number less than second number? ${result}`;
}

// Task 6
function lessThanOrEqualComparison() {
    const num1 = parseInt(document.getElementById("task6Value1").value);
    const num2 = parseInt(document.getElementById("task6Value2").value);
    const result1 = (num1 + num2) * 5;
    const result2 = Math.pow(num2, 2);
    const comparisonResult = result1 <= result2;
    console.log(`Result1 (sum x 5): ${result1}, Result2 (second number squared): ${result2}`);
    document.getElementById("task6Result").textContent = `Is Result1 less than or equal to Result2? ${comparisonResult}`;
}
