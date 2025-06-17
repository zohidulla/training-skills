function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const accountOne = makeBankAccount();
console.log(accountOne.getBalance());
accountOne.setBalance(100);
console.log(accountOne.getBalance());

const accountTwo = makeBankAccount();
console.log(accountTwo.getBalance());
accountTwo.setBalance(150);
console.log(accountTwo.getBalance());

console.log(accountOne.balance); // undefined

console.log(Object.hasOwn(accountOne, 'getBalance'));
console.log(Object.hasOwn(accountOne, 'setBalance'));

console.log(accountTwo);

console.log(accountOne instanceof makeBankAccount); // false
