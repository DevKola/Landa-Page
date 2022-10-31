"use strict";

const getUserChoice = (userInput = userInput.toLowerCase()) => {
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getUserChoice === getComputerChoice) {
    return "The game was a tie!";
  }

  if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (getUserChoice === "scissors") {
    if (getComputerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  if (getUserChoice === "paper") {
    if (getComputerChoice === "rock") {
      return "You won!";
    } else {
      return "Computer won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  return determineWinner(userChoice, computerChoice);
};

console.log(playGame());