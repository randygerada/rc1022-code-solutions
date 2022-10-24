/* exported getWords */

// string to be put in array
// need empty array
// string needs to be split and put in individual index

function getWords(string) {
  var emptyString = '';
  if (string !== '') {
    emptyString = string.split(' ');
  } else if (string === '') {
    emptyString = string.split('');
  }
  return emptyString;
}
