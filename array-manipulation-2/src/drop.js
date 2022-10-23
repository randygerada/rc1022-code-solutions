/* exported drop */

// need empty array
// altering array to drop the amount of elements equivalent to the count argument being passed.
// need to use count - 1 so that way it can start from the 0 index
// use for loop to sift through array
//
function drop(array, count) {
  var arr = [];
  for (var i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// set the initialized value of i to equal the count
// i starts at whatever value theyre passing for count
