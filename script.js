let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;
let humanSelection = null;
let computerSelection = null;

const humanScorePara = document.querySelector(".hum-score");
const computerScorePara = document.querySelector(".comp-score");
const roundCounterPara = document.querySelector(".round-number")
const roundWinnerPara = document.querySelector(".round-winner");
const resetButton = document.querySelector(".reset-button");
const gameBoard = document.querySelector(".game-board");
const winnerPara = document.createElement("p");
winnerPara.setAttribute("id", "winner");

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
const buttonNodeList = document.querySelectorAll(".container");

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

    if (roundCounter > 5) {
        if (humanScore > computerScore) {
            winnerPara.textContent = "You won!🎉🥳🎊🎁";
        } else if (humanScore < computerScore) {
            winnerPara.textContent = "You lost!💔💔";
        } else {
            winnerPara.textContent = "It's a tie!🤯🤯🤯";
        }
        
        for (const button of document.getElementsByClassName("option")) {
            button.disabled = true;
        }

        roundCounterPara.textContent = "Game ends."
        gameBoard.appendChild(winnerPara);
    }
});

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 1;
    humanSelection = null;
    computerSelection = null;

    humanScorePara.textContent = "Player score: 0";
    computerScorePara.textContent = "Computer score: 0";
    roundCounterPara.textContent = "Round 1";
    roundWinnerPara.textContent = "Nobody.";
    
    for (const node of gameBoard.childNodes) {
        if (node.id === "winner") {
            gameBoard.removeChild(winnerPara);
        }
    }

    for (const button of document.getElementsByClassName("option")) {
        button.disabled = false;
    }
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