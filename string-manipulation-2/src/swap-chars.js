/* exported swapChars */

// create a function that allows you to swap the indexes.

function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex) + string[secondIndex] + string.substring(firstIndex + 1, secondIndex) + string[firstIndex] + string.substring(secondIndex + 1);
}

/**
 * string.substring(0,firstIndex) ---> gives the letter based on the first index value, (ex: if 0 of 'lodash' -> 'l')
 * string[secondIndex] ---> gives you the value of string @ secondIndex ('o');
 * string.substring(firstIndex + 1, secondIndex) ---> first part swap
 * string[firstIndex] + string.substring(secondIndex + 1) ---> remaining part of swap
 */
