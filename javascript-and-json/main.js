var library = [
  {
    isbn: '978-3-16-148410-0',
    title: 'The Study of ergonomics and working from home',
    author: 'Herman Miller'
  },
  {
    isbn: '978-3-16-148410-1',
    title: 'The Rise of Ergonomics and Working From Home',
    author: 'Herman Miller'
  },
  {
    isbn: '978-3-16-148410-2',
    title: 'The Downfall of Ergonomics and Working From Home',
    author: 'Herman Miller'
  }
];

console.log('Library array: ', library);
console.log('typeof: ', typeof library);

var derulo = JSON.stringify(library);
console.log('json: ', derulo);
console.log('json converts the array with an object into a: ', typeof derulo);

const studentJSON = '{ "student" :"Randy Gerada",  "number id": "12345678910" }';

console.log('student:', studentJSON);
console.log('typeof:', typeof studentJSON);

const obj = JSON.parse(studentJSON);
console.log('converted to object: ', obj);
console.log('obj typeof:', typeof obj);
