// Task #1:
function task1() {
    let output = ''; 
    let i = 1;
    do {
        output += i + '<br>';
        i++;
    } while (i <= 10);
    
    document.getElementById('output1').innerHTML = "Numbers:<br>" + output;
}
// Task #2: 
function task2() {
    const n = parseInt(prompt("Enter a number (N):"));
    if (isNaN(n)) {
        document.getElementById('output2').textContent = "Please enter a valid number.";
        return;
    }
    let sum = 0, i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    document.getElementById('output2').textContent = `Sum of numbers from 1 to ${n}: ${sum}`;
}

// Task #3: 
function task3() {
    const n = parseInt(prompt("Enter a number:"));
    if (isNaN(n)) {
        document.getElementById('output3').textContent = "Please enter a valid number.";
        return;
    }

    let output = '';
    let i = 1;
    do {
        output += `${n} x ${i} = ${n * i}<br>`; 
        i++;
    } while (i <= 10);

    document.getElementById('output3').innerHTML = `Multiplication Table:<br>${output}`;
}


// Task #4: 
function task4() {
    let n = parseInt(prompt("Enter a number:"));
    if (isNaN(n)) {
        document.getElementById('output4').textContent = "Please enter a valid number.";
        return;
    }
    let reverse = 0;
    do {
        reverse = reverse * 10 + (n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    document.getElementById('output4').textContent = `Reversed Number: ${reverse}`;
}

// Task #5: 
function task5() {
    let n = parseInt(prompt("Enter a number:"));
    if (isNaN(n)) {
        document.getElementById('output5').textContent = "Please enter a valid number.";
        return;
    }
    let sum = 0;
    do {
        sum += n % 10;
        n = Math.floor(n / 10);
    } while (n > 0);
    document.getElementById('output5').textContent = `Sum of Digits: ${sum}`;
}

// Task #6: 
function task6() {
    let n = parseInt(prompt("Enter a number:"));
    if (isNaN(n)) {
        document.getElementById('output6').textContent = "Please enter a valid number.";
        return;
    }
    let original = n, reverse = 0;
    do {
        reverse = reverse * 10 + (n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    const result = (original === reverse) ? "is a Palindrome" : "is not a Palindrome";
    document.getElementById('output6').textContent = `The number ${original} ${result}.`;
}
