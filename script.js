let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        showText("📃 beats 🪨.");
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        showText("📃 beats 🪨.");
        return "player";
    }
        

    if (playerSelection === "scissors" && computerSelection === "rock") {
        showText("🪨 beats ✂️.");
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        showText("🪨 beats ✂️.");
        return "player";
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        showText("✂️ beats 📃.");
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        showText("✂️ beats 📃.");
        return "player";
    }

    if (playerSelection === computerSelection) {
        showText("It's a draw!");
        return "draw";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let scoreDisplay = document.querySelector(".score-display");

    [rock, paper, scissors].forEach(item => item.addEventListener("click", e => {
        let result = playRound(item.classList[0], getComputerChoice());
        if (result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        } 
        scoreDisplay.innerText = `${playerScore} - ${computerScore}`;
        if (playerScore >= 5) {
            showText("Player wins!");
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore >= 5) {
            showText("Computer wins!")
            playerScore = 0;
            computerScore = 0;
        }
    }));
})

function showText(text) {
    let resultText = document.querySelector(".result-text");
    resultText.innerText = text;
}