/* exported tail */

// take every element except the first one and store it into an array
// use a for loop to go through the array

function tail(array) {
  var emptyArray = [];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[array.lenth - 1];
    emptyArray.push(array[i]);
  }
  return emptyArray;
}

// manipulated the first index of the array by adding 1 to the initialized variable i = 0;
// 1 was added to array @ zero in order to start on the 1 index instead of the 0 index;
