function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('multiplyResult').innerText = `Result: ${result}`;
}

function incrementNumber() {
    const num = parseFloat(document.getElementById('incrementNum').value);
    const result = num + 1;
    document.getElementById('incrementResult').innerText = `Result: ${result}`;
}

function compoundAddition() {
    let num = parseFloat(document.getElementById('compoundNum').value);
    const valueToAdd = parseFloat(document.getElementById('addValue').value);
    num += valueToAdd; // Compound assignment
    document.getElementById('compoundResult').innerText = `Result: ${num}`;
}
