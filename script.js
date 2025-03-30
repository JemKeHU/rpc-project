let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
let humanSelection = null;
let computerSelection = null;

const humanScorePara = document.querySelector(".hum-score");
const computerScorePara = document.querySelector(".comp-score");
const roundCounterPara = document.querySelector(".round-number")
const roundWinnerPara = document.querySelector(".round-winner");

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

const buttonContainer = document.querySelector(".container");

console.log(`Got a computer choice: ${getComputerChoice()}`)

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    
    switch (target.id) {
        case "rock":
            humanSelection = "rock";
            break;
        case "paper":
            humanSelection = "paper";
            break;
        case "scissors":
            humanSelection = "scissors";
            break;
    }
    
    computerSelection = getComputerChoice();
                
    let result = playRound(humanSelection, computerSelection);

    humanScorePara.textContent = `Player score: ${humanScore}`;
    computerScorePara.textContent = `Computer score: ${computerScore}`;
    roundCounterPara.textContent = `Round ${roundCounter}`;
    roundWinnerPara.textContent = `${result}`;
});

function playRound(humChoice, compChoice) {
    if (humChoice === "paper" && compChoice === "rock") {
        roundCounter++;
        humanScore++;
        return "You win! Paper beats Rock";
    } else if (humChoice === "scissors" && compChoice === "paper") {
        roundCounter++;
        humanScore++;
        return "You win! Scissors beats Paper";
    } else if (humChoice === "rock" && compChoice === "scissors") {
        roundCounter++;
        humanScore++;
        return "You win! Rock beats Scissors";
    } else if (humChoice === compChoice) {
        roundCounter++;
        return "It's a tie!";
    }

    if (compChoice === "paper" && humChoice === "rock") {
        computerScore++;
        return "You lost! Paper beats Rock";
    } else if (compChoice === "scissors" && humChoice === "paper") {
        roundCounter++;
        computerScore++;
        return "You lost! Scissors beats Paper";
    } else if (compChoice === "rock" && humChoice === "scissors") {
        roundCounter++;
        computerScore++;
        return "You lost! Rock beats Scissors";
    } else if (humChoice === compChoice) {
        roundCounter++;
        return "It's a tie!";
    }

}