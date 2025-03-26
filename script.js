console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Rock Paper or Scissors?").toLowerCase();

    if (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors") {
        return "Invalid input, please refresh the page.";
    }

    return humanChoice;
}
