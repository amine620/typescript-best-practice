"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    diposit(amount) {
        if (amount <= 0) {
            throw new Error('invalid amount');
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'amine', 20);
account.id;
//# sourceMappingURL=index.js.map