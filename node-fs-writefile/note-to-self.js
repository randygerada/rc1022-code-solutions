const fs = require('fs');

const argv = process.argv[2] + '\n';

fs.writeFile('note.txt', Buffer.from(argv), err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
