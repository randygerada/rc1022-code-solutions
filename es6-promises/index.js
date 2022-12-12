const takeAChance = require('./take-a-chance');

const newObj = takeAChance('Randy');

newObj.then(message => {
  console.log(message);
}).catch(error => {
  console.error(error.message);
});
