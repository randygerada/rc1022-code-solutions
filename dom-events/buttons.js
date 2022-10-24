
function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event targeted', event.target);
  return handleClick;
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick, true);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event targeted', event.target);
  return handleMouseover;
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover, true);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event targeted', event.target);
  return handleMouseover;
}

var $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick, true);
