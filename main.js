class BankAccount {
  
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber,
    this.owner = owner

    this.amount = 0
  }

  transactions = []
  
  
  balance(){

    if(this.transactions.length >= 2){
      let sum = 0
      
      for (let i = 0; i < this.transactions.length; i++){
        sum += this.transactions.amount
      }
      console.log('Balance: ' + sum)
    }

    else if(this.transactions.length == 1){
      console.log('Balance: ' + this.transactions[0])
    }

    else(
      console.log('No history')
    )
  }

  deposit(amt){
    let currTransaction = new Transactions(amt, this.owner)
    this.transactions.push()
    console.log(this.transactions)
    console.log(currTransaction.date)
  }

  charge(payee, amt){
    let currTransaction = new Transactions(amt, payee)
    this.transactions.push()
  }
}

class Transactions{

  constructor(amount, payee){
    this.amount = amount,
    this.payee = payee

    const d = new Date()
    this.date = d.getDay()
  }

  
}

let firstBankAccount = new BankAccount('110529', 'Alex Molina')


firstBankAccount.deposit(10)
// firstBankAccount.deposit(50)