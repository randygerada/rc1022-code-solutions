
var $countDown = document.querySelector('.countdown-display');

var i = 0;
function countdown() {
  var count = ['3', '2', '1', '~Earth beeelooowww Us~'];
  $countDown.textContent = count[i];
  i += 1;
  if (i === 4) {
    clearInterval(interval);
  }
}

var interval = setInterval(countdown, 1500);
