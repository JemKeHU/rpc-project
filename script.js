console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

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

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humChoice, compChoice) {
        if (humChoice === "paper" && compChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humChoice === "scissors" && compChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (humChoice === "rock" && compChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humChoice === compChoice) {
            console.log("It's a tie!")
        }
    
        if (compChoice === "paper" && humChoice === "rock") {
            console.log("You lost! Paper beats Rock");
            computerScore++;
        } else if (compChoice === "scissors" && humChoice === "paper") {
            console.log("You lost! Scissors beats Paper");
            computerScore++;
        } else if (compChoice === "rock" && humChoice === "scissors") {
            console.log("You lost! Rock beats Scissors");
            computerScore++;
        } else if (humChoice === compChoice) {
            console.log("It's a tie!")
        }
    }

    if (humanScore === computerScore) {
        console.log(`H ${humanScore} = C ${computerScore}\nBoth are winners!`);
    } else if (humanScore >= computerScore) {
        console.log(`H ${humanScore} > C ${computerScore}\nYou are the winner!`);
    } else {
        console.log(`H ${humanScore} < C ${computerScore}\nYou have lost!`);
    }
}

playGame();