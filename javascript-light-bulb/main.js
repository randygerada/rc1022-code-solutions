var clicks = true;
var $circle = document.querySelector('.circle');
var background = document.querySelector('.backdrop');
$circle.addEventListener('click', changeColorButton);

function changeColorButton(event) {
  var changeBackgroundColor, changeColor;
  if (clicks) {
    changeColor = 'circle dark';
    changeBackgroundColor = 'backdrop night';
    clicks = false;
  } else {
    changeColor = 'circle light';
    changeBackgroundColor = 'backdrop day';
    clicks = true;
  }

  $circle.className = changeColor;
  background.className = changeBackgroundColor;
}
