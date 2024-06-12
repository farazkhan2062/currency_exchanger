#! /usr/bin/env node
// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one 
//currency and set the currency they want to check the monetary value of.
// While developing the app, the beginners can master variables, algorithms, loops, if statements, and other 
//TypeScript concepts.
// Create a GitHub repository for the project and submit its URL in the project submission form.
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
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
        message: chalk.blue("Select your currency from"),
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "SAR"],
        message: chalk.green("Select your currency to"),
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Enter your amount"),
    },
]);
let fromAnswer = currency[userAnswer.from];
let toAnswer = currency[userAnswer.to];
let amountAnswer = (userAnswer.amount);
let baseAmount = amountAnswer / fromAnswer;
let result = baseAmount * toAnswer;
let result1 = result.toFixed(2);
console.log(chalk.magentaBright.bold.italic(`\nyour amount is ${result1}`));
