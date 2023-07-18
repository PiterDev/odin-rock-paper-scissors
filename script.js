function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    }
        

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player";
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player";
    }

    if (playerSelection === computerSelection) {
        return "draw";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("Pick rock/paper/scissors")
        let result = playRound(playerSelection, getComputerChoice());
        
        
        if (result === "player") {
            playerScore++;
            console.log("Player wins!");
        } else if (result === "computer") {
            computerScore++;
            console.log("Computer wins!");
        } else {
            console.log("Draw!")
        }
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose :(")
    } else {
        console.log("It's a draw!")
    }
}
