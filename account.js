'use strict';

const prompt = require('prompt-sync')();

let user = {
    pin: 1234,
    balance: 4321
};

module.exports.pin = user.pin;
module.exports.balance = user.balance;
