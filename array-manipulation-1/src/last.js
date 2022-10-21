/* exported last */
// need to retrieve the last element in the array.
// have to use a for loop in order to go through the whole array
// use the length of the array as a condition.
function last(array) {
  for (var i = 0; i < array.length; i++) {
    var getIndex = array.length - 1;
    var lastElement = array[getIndex];
  }
  return lastElement;
}
