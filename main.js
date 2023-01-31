let playerScore = 0;
let comScore = 0;
let winner;

//Returns computer's decision
function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Plays one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        winner = "no";
        return "It's a Draw";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        winner = "player";
        playerScore = ++playerScore;
        return "You Win!";
    } else {
        winner = "com";
        comScore = ++comScore;
        return "You Lose!";
    }
};

function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose your Weapon!");
        computerSelection = getComputerChoice();
        console.clear();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Points:" + playerScore);
        console.log("Their Points:" + comScore);
        console.log("You Chose: " + playerSelection);
        console.log("They Chose: " + computerSelection);
    }
}

game();