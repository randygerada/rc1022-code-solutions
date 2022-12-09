const takeAChance = require('./take-a-chance');

const newObj = takeAChance('Randy');

newObj.then((message) => {
  console.log(message);
}).catch((message) => {
  console.error(message);
});
