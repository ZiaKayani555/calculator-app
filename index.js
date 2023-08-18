import inquirer from "inquirer";
import { Addition } from "./components/Addition.js";
import { Multiplication } from "./components/Multiplication.js";
import { Division } from "./components/Division.js";
import chalk from "chalk";
(async () => {
    const answer = await inquirer.prompt([
        {
            name: 'value1',
            type: 'number',
            message: 'Enter the first number:',
        },
        {
            name: 'operator',
            type: 'input',
            message: 'Enter the operator:',
        },
        {
            name: 'value2',
            type: 'number',
            message: 'Enter the second number:',
        },
    ]);
    // Destructure the answers
    const { value1, operator, value2 } = answer;
    if (operator === "+") {
        Addition(value1, value2);
    }
    if (operator === "*") {
        Multiplication(value1, value2);
    }
    if (operator === "/") {
        Division(value1, value2);
    }
    else {
        console.log(chalk.bgRed("Invalid operator or not implemented yet."));
    }
})();
