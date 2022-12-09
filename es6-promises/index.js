const takeAChance = require('./take-a-chance');

const newObj = takeAChance('Randy');

newObj.then((value) => {
  console.log(value);
});

newObj.catch((error) => {
  console.log(error);
});
