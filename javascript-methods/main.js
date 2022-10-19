var numberOne = 5;
var numberTwo = 6;
var numberThree = 12;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);

console.log('the maximum value between the three numbers is:', maximumValue);

var heros = ['Spider Man', 'Iron Man', 'Black Widow', 'Thanos'];

var randomNumber = Math.random(heros);
console.log('this is a random number from an array of strings:', randomNumber);

randomNumber = randomNumber * heros.length;

var randomIndex = Math.floor(randomNumber);

console.log('random index using the floor method:', randomIndex);

var randomHero = heros[randomIndex];

console.log('random hero selector:', randomHero);

// Array Methods

var library = [
  {
    title: 'It Starts with Us: A Novel',
    author: 'Colleen Hoover'
  },
  {
    title: 'The Chalice of the Gods',
    author: 'Rick Riordan'
  },
  {
    title: 'The Boys from Biloxi: A Legal Thriller',
    author: 'John Grisham'
  }
];

var lastBook = library.pop();
console.log('this is the last book of the library:', lastBook);

var firstBook = library.shift();
console.log('this is the first book of the library:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Randy Gerada';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
