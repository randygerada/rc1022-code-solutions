
var clicks = 0;
const updateClicks = document.getElementsByClassName('.click-count');
updateClicks.textContent = 'this was clicked' + clicks + 'times';

function numberOfClicks() {
  clicks += 1;
}

// var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$clickCount.addEventListener('click', numberOfClicks);

/*
const updateClicks = document.getElementsByClassName('.click-count').textContent;
clicks += 1;
document.getElementsByClassName('.click-count').textContent = updateClicks;
*/
