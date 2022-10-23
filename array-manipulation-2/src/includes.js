/* exported includes */

// function will has paramenters, array and value
// this function is used to check if that value being passed is within the array
// its using boolean so if statements
// use length of array to loop through

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
