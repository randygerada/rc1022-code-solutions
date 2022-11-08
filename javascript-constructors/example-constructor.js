
function ExampleConstructor() {
}

console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('value of typeof prototype property:', typeof ExampleConstructor.prototype);

var constructor = new ExampleConstructor();
console.log('value of constructor:', constructor);

console.log('the value of the variable is indeed:', constructor instanceof ExampleConstructor);
