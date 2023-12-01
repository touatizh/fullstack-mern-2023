const BankAccount = require("../bank-account/BankAccount")

class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.account = new BankAccount(5)
    }

    makeDeposit(amount) {
        this.account.deposit(amount)
        return this
    }

    makeWithdrawl(amount) {
        this.account.withdrawl(amount)
        return this
    }

    displayBalance() {
        console.log(`User: ${this.name},`)
        this.account.displayAccountInfo()
    }

    transferMoney(receiver, amount) {
        this.account.withdrawl(amount)
        receiver.account.deposit(amount)
        return this
    }
}

// Creating 3 instances of User class
const nick = new User("Nicholas Tran", "lu@zi.eg")
const ian = new User("Ian Rodriguez", "lo@comeovo.as")
const bruce = new User("Bruce Myers", "ladcesev@huaki.bg")

// First user: 3 deposits 1 withdrawl
nick.makeDeposit(300).makeDeposit(500).makeDeposit(660).makeWithdrawl(800).displayBalance()

// Second user: 2 deposits 2 withdrawls
ian.makeDeposit(680).makeDeposit(360).makeWithdrawl(270).makeWithdrawl(65).displayBalance()

// Third user: 1 deposit 3 withdrawls
bruce.makeWithdrawl(130).makeWithdrawl(530).makeWithdrawl(45).makeDeposit(500).displayBalance()

// Money transfer from first user to the third user
nick.transferMoney(bruce, 300).displayBalance()
bruce.displayBalance()
