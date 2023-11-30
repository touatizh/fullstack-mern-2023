class User {
    constructor(username, email) {
        this.name = username
        this.email = email
        this.balance = 0
    }

    makeDeposit(amount) {
        this.balance += amount
        return this
    }

    makeWithdrawl(amount) {
        this.balance -= amount
        return this
    }

    displayBalance() {
        console.log(`User: ${this.name}, Balance: $${this.balance}`)
    }

    transferMoney(receiver, amount) {
        this.balance -= amount
        receiver.balance += amount
        return this
    }
}

// Creating 3 instances of User class
nick = new User("Nicholas Tran", "lu@zi.eg")
ian = new User("Ian Rodriguez", "lo@comeovo.as")
bruce = new User("Bruce Myers", "ladcesev@huaki.bg")

// First user: 3 deposits 1 withdrawl
nick.makeDeposit(300).makeDeposit(500).makeDeposit(660).makeWithdrawl(800).displayBalance()

// Second user: 2 deposits 2 withdrawls
ian.makeDeposit(680).makeDeposit(360).makeWithdrawl(270).makeWithdrawl(65).displayBalance()

// Third user: 1 deposit 3 withdrawls
bruce.makeWithdrawl(130).makeWithdrawl(530).makeWithdrawl(45).makeDeposit(500).displayBalance()

// Money transfer from first user to the third user
nick.transferMoney(bruce, 300).displayBalance()
bruce.displayBalance()
