function task1(){
    for (let i = 1; i <= 10; i++) {
        console.log(i+"\n");
    }
}

function task2(){
let N = parseInt(prompt("Enter a number:"));
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to " + N + " is: " + sum+"\n\n");
}

function task3(){
    for (let i = 2; i <= 20; i += 2) {
        console.log(i+"\n");
    }
}

function task4(){
let N = parseInt(prompt("Enter a number:"));
    let pattern = '';
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        pattern += '\n'; 
    }
    console.log(pattern);
}

function task5(){
    let N = parseInt(prompt("Enter a number to calculate its factorial:"));
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    console.log("The factorial of " + N + " is: " + factorial+"\n\n");
}

function task6(){
    let N = parseInt(prompt("Enter a number to check if it is prime:"));
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && N > 1) {
        console.log(N + " is a prime number.");
    } else {
        console.log(N + " is not a prime number.");
    }
}