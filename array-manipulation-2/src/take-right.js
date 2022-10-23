/* exported takeRight */

// function passing to parameters an array and count
// count is a postive number/ integer.
// function will take from the end of the array depending on the count

function takeRight(array, count) {
  var arr = [];

  for (var i = array.length - count; i < array.length; i++) {
    if ((array.length === 0) || (array.length < count)) {
      return array;
    }
    arr.push(array[i]);
  }
  return arr;
}

// check for conditions properly
// checked for an empty array and if count was greater than the length of the array
