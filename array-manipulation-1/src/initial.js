/* exported initial */

// removing the last index by usining the length of the array and subtracting 1
function initial(array) {
  var emptyArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}
