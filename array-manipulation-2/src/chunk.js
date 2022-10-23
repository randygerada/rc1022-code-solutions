/* exported chunk */

// as we read the list, build arrays based on size
// build sub arrays based on size
// once we go through list we return a new array

function chunk(array, size) {
  var splitArray = [];
  for (const i of array) {
    const lastIndex = splitArray[splitArray.length - 1];
    if (!lastIndex || lastIndex.length === size) {
      splitArray.push([i]);
    } else {
      lastIndex.push(i);
    }
  }
  return splitArray;
}

// used a for of loop in order to loop throught the elements of the array
// created new variable lastIndex in order to get the last element of the array
/* set a condition where if not lastIndxex doesnt exist or if the index of lastIndex is equal
   to size then we would want to create new array */
