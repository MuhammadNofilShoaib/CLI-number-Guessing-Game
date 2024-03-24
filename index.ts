#! /usr/bin/env node

import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random()*10+1) ; //computer inserted number that user has to guess in order to win
const answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber", // user input number should be equal to computer number to win
    type: "number",
    message: "Guess a number between 1 and 10: ",
  },
]);
  //compare user input and computer number and print statements according to user input
if (answer.UserGuessedNumber === RandomNumber) {
  console.log("You guessed the Right number");
} else {
  console.log("You Guessed the Wrong number");
}
