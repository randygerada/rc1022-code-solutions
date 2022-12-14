
var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', clickChange);

function clickChange(event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }

    }
  }

  var getView = event.target.getAttribute('data-view');
  for (var j = 0; j < $view.length; j++) {
    if ($view[j].getAttribute('data-view') !== getView) {
      $view[j].className = 'view hidden';
    } else {
      $view[j].className = 'view';
    }
  }

}
