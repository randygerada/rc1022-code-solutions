/* exported reverse */

// loop through array by using a for loop and the array length
// use decrement value??

function reverse(array) {
  var emptyArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    emptyArray.push(array[i]);
  }
  return emptyArray;
}

// letting the variable i have the value of the array length - 1. This is so we can start from the last index
// the condition is that array.length-1 >= 0
// ending the loop by decrementing i
