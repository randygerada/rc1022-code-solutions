/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var depositAmount = new Transaction('deposit', amount);
    this.transactions.push(depositAmount);
    return true;
  }
  return false;

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawAmount = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawAmount);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var funds = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      funds += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      funds -= this.transactions[i].amount;
    }
  }
  return funds;
};
