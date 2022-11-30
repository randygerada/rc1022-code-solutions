let count = 3;
const countdown = setInterval(update, 1000);

function update() {
  console.log(count);
  count--;
  if (count === 0) {
    setTimeout(() => {
      console.log('Blast off!');
    }, 1000);
    clearInterval(countdown);
  }
}
