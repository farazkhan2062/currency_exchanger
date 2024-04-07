#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PKR: 278,
  INR: 83,
  EUR: 0.92,
  SAR: 3.75,
};

let userAnswer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "SAR"],
    message: "Select your currency from",
  },
  {
    name: "to",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "SAR"],
    message: "Select your currency to",
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount",
  },
]);

let fromAnswer = currency[userAnswer.from];
let toAnswer = currency[userAnswer.to];
let amountAnswer = userAnswer.amount;
let baseAmount = amountAnswer / fromAnswer;
let result: number = baseAmount * toAnswer;
let result1 = result.toFixed(3);
console.log(result1);
