const addition = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argv = process.argv;
const argvs = argv.slice(2);

const num1 = Number(argvs[0]);
const operation = argvs[1];
const num2 = Number(argvs[2]);

if (operation === 'plus') {
  console.log('Result:', addition(num1, num2));
} else if (operation === 'minus') {
  console.log('Result:', subtract(num1, num2));
} else if (operation === 'times') {
  console.log('Result:', multiply(num1, num2));
} else if (operation === 'over') {
  console.log('Result:', divide(num1, num2));
} else {
  console.log('invalid result');
}
