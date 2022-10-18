function convertMinutesToSeconds(minutes) {
  var seconds = 60 * minutes;
  return seconds;
}

var minsToSecondsResult = convertMinutesToSeconds(5);
console.log('minsToSecondsResult:', minsToSecondsResult);

function greet(name) {
  var greetings = 'Hey, ' + name;
  return greetings;
}

var salutations = greet('Beavis');
console.log(salutations);

function getArea(width, height) {
  var areaOfRectangle = width * height;
  return areaOfRectangle;
}

var rectangleArea = getArea(17, 42);
console.log(rectangleArea);

function getFirstName(person) {
  var fullName = person;
  var name = fullName.firstName;
  return name;
}

var personFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(personFirstName);

function getLastElement(array) {
  var input = array;
  var getArrayLength = input.length;
  var lastIndex = getArrayLength - 1;
  var lastElement = input[lastIndex];
  return lastElement;

}

var lastElementOfArray = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element of the array is: ', lastElementOfArray);
