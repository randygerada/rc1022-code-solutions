/* exported compact */
// use for loop to loop through array
//
function compact(array) {
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
}

// using conditional statement like if is an evaluation of true or false
// by using an if statement, it saying that if that value of the index in the array is true go to the next line
// by using if (array[i]) its asking is that value a true value
