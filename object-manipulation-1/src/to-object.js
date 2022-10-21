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
