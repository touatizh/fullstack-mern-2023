class BankAccount {

    constructor(intRate, balance) {
        this.balance = 0
        this.intRate = 10
    }

    deposit(amount) {
        this.balance += amount
        return this
    }

    withdrawl(amount) {
        this.balance -= amount
        return this
    }

    displayAccountInfo() {
        console.log(`Interest Rate: ${this.intRate}, Account Balance: $${this.balance}`)
    }

    yieldInterest() {
        if (this.balance >= 0) this.balance += this.balance * (this.intRate/100)
        else console.log("You are not eligible to yield interest, reason: Negative balance.")
        return this
    }
}

// Creating two new accounts
account1 = new BankAccount()
account2 = new BankAccount()

// First account: 3 deposits 1 withdrawl
account1.deposit(300).deposit(500).deposit(660).withdrawl(800).yieldInterest().displayAccountInfo()

// First account: 2 deposits 4 withdrawl
account1.deposit(300).deposit(500).withdrawl(660).withdrawl(800).withdrawl(200).withdrawl(88).yieldInterest().displayAccountInfo()