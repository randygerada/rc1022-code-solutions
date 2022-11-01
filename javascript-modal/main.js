var modal = document.querySelector('.modal');
var blueBtn = document.querySelector('.blue-btn');
var redBtn = document.querySelector('.red-btn');

blueBtn.addEventListener('click', toggleModal);
redBtn.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
