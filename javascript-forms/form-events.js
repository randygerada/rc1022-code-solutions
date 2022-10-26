
var $focus = document.querySelector('input[name="name"]');
var $blur = document.querySelector('input[name="name"]');
var $input = document.querySelector('input[name = "name"]');

var $focusEmail = document.querySelector('input[name="email"]');
var $blurEmail = document.querySelector('input[name="email"]');
var $inputEmail = document.querySelector('input[name = "email"]');

var $focusMessage = document.querySelector('textarea[name="message"]');
var $blurMessage = document.querySelector('textarea[name="message"]');
var $inputMessage = document.querySelector('textarea[name="message"]');

$focus.addEventListener('focus', handleFocus);
$blur.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);

$focusEmail.addEventListener('focus', handleFocus);
$blurEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$focusMessage.addEventListener('focus', handleFocus);
$blurMessage.addEventListener('blur', handleBlur);
$inputMessage.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('Value of name:', event.target.value);

}
