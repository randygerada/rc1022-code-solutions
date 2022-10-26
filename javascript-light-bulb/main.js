var clicks = 0;
var $circle = document.querySelector('.circle');
var background = document.querySelector('.backdrop');
$circle.addEventListener('click', changeColorButton);

function changeColorButton(event) {
  var changeBackgroundColor, changeColor;
  if (clicks % 2 === 0) {
    changeColor = 'dark';
    changeBackgroundColor = 'background';
  } else {
    changeColor = 'circle';
    changeBackgroundColor = 'backdrop';
  }
  clicks++;

  $circle.className = changeColor;
  background.className = changeBackgroundColor;
}
