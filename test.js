const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 != 0) {
                return num1 / num2;
            } else {
                return 'Cannot divide by zero';
            }
        default:
            return 'Invalid operator';
    }
}

rl.question('Enter the first number: ', (answer1) => {
    rl.question('Enter the operator: ', (operator) => {
        rl.question('Enter the second number: ', (answer2) => {
            console.log(`The result is: ${calculate(answer1, operator, answer2)}`);
            rl.close();
        });
    });
});