class ExampleClass {
  constructor(example, course) {
    this.example = example;
    this.course = course;
  }
  giveAnExample() {
    return `This is an example: ${this.example} loves ${this.course}`;
  }
}

const example = new ExampleClass('Herman', 'JavaScript');

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleClass.prototype:', typeof ExampleClass.prototype);
console.log('value of ExampleClass.prototype:', ExampleClass.prototype);

console.log('example instanceof ExampleClass', example instanceof ExampleClass);
