const fs = require('fs');

const argv = process.argv;
const argvs = argv.slice(2);
const txtFile = argvs[0];

if (txtFile === 'cunningham.txt') {
  fs.readFile('cunningham.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else if (txtFile === 'hopper.txt') {
  fs.readFile('hopper.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else if (txtFile === 'dijkstra.txt') {
  fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
} else {
  console.log('invalid entry');
}
