/* exported getLastCharacter */
function getLastCharacter(string) {
  var $string = string;
  var $stringLength = $string.length - 1;
  var lastChar = $string[$stringLength];
  return lastChar;
}
