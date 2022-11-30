const fs = require('fs');

const randomNumber = Math.random();
const data = randomNumber.toString() + '\n';

fs.writeFile('random.txt', Buffer.from(data), err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
