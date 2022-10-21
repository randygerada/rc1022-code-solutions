/* exported getKeys */

// definining new function with one parameter
// object = an object
// return value should be in a form of an array

function getKeys(object) {
  var value = [];
  for (var key in object) {
    value.push(key);
  }
  return value;
}
