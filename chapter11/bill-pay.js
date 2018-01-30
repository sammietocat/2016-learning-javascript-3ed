class Account {
  constructor(balance) {
    this.balance = balance;
  }

  transfer(payee, amount) {
    console.log("remove ${amount} from ${payee}");
  }
}

function billPay(amount, payee, account) {
  if (amount > account.balance)
    throw new Error("insufficient funds");
  account.transfer(payee, amount);
}

const account = new Account(1);
const amount = 2;
const payee = "Tom";

billPay(amount, payee, account);