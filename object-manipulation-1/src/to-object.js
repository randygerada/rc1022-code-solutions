/* exported toObject */

// keyValuePair is an array containing two elements; a string & any other js value.
// the return value has to be in a form of an object { }

function toObject(keyValuePair) {

  for (var i = 0; i < keyValuePair.length; i++) {
    var emptyObj = {};
    emptyObj[keyValuePair[i - 1]] = keyValuePair[i];
  }
  return emptyObj;
}

// called for an empty object

// use array length as conditional

// first index of keyValuePair the result of that is being added to the emptyObj object
// [keyValuePair[i - 1]] is 0-1 = -1
