/* exported take */

// 2 parameters any array, and count = number
// as per the example output it wants us to push an array as the output
// need to loop through the array
// take in integer value as count of the elements inside the array

function take(array, count) {

  var arr = [];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (count - 1 >= counter) {
      arr.push(array[i]);
      counter++;
    }
  }
  return arr;
}

// created a new varaible counter and set it equal to 0;
// used the counter variable for the condition of if statement in order to make count false
// incremented counter in order to make if statement false
