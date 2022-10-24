/* exported truncate */

// defining a new function "truncate", with two paramenters. length = number value, string = string
// append the result in a string and concatenated with ellipsis...

function truncate(length, string) {
  if (string.length > length) {
    return string.substring(0, length) + '...';
  } else {
    return string + '...';
  }
}

// used substring method to grab the index from 0 to length.
