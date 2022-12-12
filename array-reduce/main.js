const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];


const sum = numbers.reduce((total, number) => total + number, 0);
console.log('sum:',sum);

const product = numbers.reduce((total, number) => total * number, 1);
console.log('product:', product);

const balance = account.reduce((total, transaction) => {
  if(transaction.type === 'deposit') {
    return total + transaction.amount;
  } else if (transaction.type === 'withdrawal') {
    return total - transaction.amount;
  }
}, 0);
console.log('combine transactions: ', balance);


const composite = traits.reduce((result, trait) => {
  for (const key in trait) {
    result[key] = trait[key];
  }
  return result;
}, {});
console.log(composite);
