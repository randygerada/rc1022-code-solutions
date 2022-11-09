var hello = document.querySelector('.message');

function change() {
  hello.textContent = 'Hello There';
}

setTimeout(change, 3000);
