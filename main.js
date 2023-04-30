class BankAccount {
  
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber
    this.owner = owner

    this.accountBalance = 0
  }

  transactions = []
  
  
  balance(){

    if(this.transactions.length >= 2){
      let sum = 0
      
      for (let i = 0; i < this.transactions.length; i++){
        sum += this.transactions[i].amount
      }
      this.accountBalance = sum
      console.log('The current balance for account #' + this.accountNumber + ' is $' + this.accountBalance)
    }

    else if(this.transactions.length == 1){
      this.amount = this.transactions[0].amount
      console.log('The current balance for account #' + this.accountNumber + ' is $' + this.accountBalance)
    }

    else(
      console.log('No history')
    )
  }

  deposit(amt){
    let currTransaction = new Transaction(amt, this.owner)
    
    if(currTransaction.amount <= 0 ){
      console.log('Invalid deposit')
    }

    else{
      this.transactions.push(currTransaction)
      console.log('Deposited $' + currTransaction.amount + ' to account #' + this.accountNumber + '.')
    }
    
  }

  charge(payee, amt){
    let currTransaction = new Transaction(amt, payee)
    
    if(currTransaction.amount > this.accountBalance){
      console.log('Payment Declined')
    }

    else{
      if(currTransaction.amount < 0){
        console.log('Invalid charge')
      }
      else{
      console.log('Payment made to ' + currTransaction.payee + ' in the amount of $' + currTransaction.amount + '.')
      currTransaction.amount = currTransaction.amount * -1
      this.transactions.push(currTransaction)
      }
    }
  }
}

class Transaction{

  constructor(amount, payee){
    this.amount = amount
    this.payee = payee

    const d = new Date()
    this.date = d.getDay()
  }

  date
  
}

let firstBankAccount = new BankAccount('110529', 'Alex Molina')

let firstTransaction = new Transaction(10.50, "Rachel")


// console.log(firstTransaction.date)
firstBankAccount.deposit(50)
firstBankAccount.deposit(100)
firstBankAccount.balance()
firstBankAccount.charge('Little Caesars Pizza', 30)
firstBankAccount.balance()
firstBankAccount.deposit(-10)
firstBankAccount.charge('Best Buy Inc', 500)
firstBankAccount.charge('HEB', 48.95)
firstBankAccount.balance()
firstBankAccount.charge('Sketchy Loan', -98)
console.log(firstBankAccount.transactions)