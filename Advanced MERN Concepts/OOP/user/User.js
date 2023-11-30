class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.balance = 0
    }

    makeDeposit(amount) {
        this.balance += amount
    }

    makeWithdrawl(amount) {
        this.balance -= amount
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.balance}`)
    }

    transferMoney(receiver, amount) {
        this.balance -= amount
        receiver.balance += amount
    }
}

// Creating 3 instances of User class
nick = new User("Nicholas Tran", "lu@zi.eg")
ian = new User("Ian Rodriguez", "lo@comeovo.as")
bruce = new User("Bruce Myers", "ladcesev@huaki.bg")

// First user: 3 deposits 1 withdrawl
nick.makeDeposit(300)
nick.makeDeposit(500)
nick.makeDeposit(660)
nick.makeWithdrawl(800)
nick.displayBalance()

// Second user: 2 deposits 2 withdrawls
ian.makeDeposit(680)
ian.makeDeposit(360)
ian.makeWithdrawl(270)
ian.makeWithdrawl(65)
ian.displayBalance()

// Third user: 1 deposit 3 withdrawls
bruce.makeWithdrawl(130)
bruce.makeWithdrawl(530)
bruce.makeWithdrawl(45)
bruce.makeDeposit(500)
bruce.displayBalance()

// Money transfer from first user to the third user
nick.transferMoney(bruce, 300)
nick.displayBalance()
bruce.displayBalance()