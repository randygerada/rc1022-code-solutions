var student = {
  firstName: 'Randy',
  lastName: 'Gerada',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'sales representative';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of Student:', student);

// The vehicle Object

var vehicle = {
  make: 'Tesla',
  model: 'Model S Plaid',
  year: 2022
};

vehicle['color'] = 'matte black';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']:', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']:', vehicle['isConvertible']);

// The pet Object
var pet = {
  name: '',
  type: ''
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
