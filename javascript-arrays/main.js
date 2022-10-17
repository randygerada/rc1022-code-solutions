var colors;
colors = ['red', 'white', 'blue'];

var itemOne, itemTwo, itemThree;

itemOne = colors[0];
itemTwo = colors[1];
itemThree = colors[2];

console.log('value of colors[0]:', itemOne);
console.log('value of colors[1]:', itemTwo);
console.log('value of colors[1]:', itemThree);

var freedom = 'America is' + ' ' + colors[0] + ' ' + colors[1] + ' ' + 'and ' + colors[2] + '.';
console.log(freedom);

colors[2] = 'green';

var mexico = 'Mexico is' + ' ' + colors[0] + ' ' + colors[1] + ' ' + 'and ' + colors[2] + '.';
console.log(mexico);

console.log(colors);

// The Students Array

var students = ['Randy', 'Herman', 'Miller', 'Jake'];

var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' ' + 'students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is' + ' ' + lastStudent);
console.log(students);
