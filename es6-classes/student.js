/* exported Student */

class Student {
  constructor (firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getIntroduction () {
    //const fullName = this.getFullName();
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
}

const newStudent = new Student('Randy', 'Gerada', 'React');

const intro = newStudent.getIntroduction();
console.log(intro);

/*
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  const { firstName, lastName } = this;
  return `${firstName} ${lastName}`;
};

Student.prototype.getIntroduction = function () {
  const { subject } = this;
  const fullName = this.getFullName();
  return `Hello, my name is ${fullName} and I am studying ${subject}.`;
};

*/
