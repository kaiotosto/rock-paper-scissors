let playerScore = 0;
let comScore = 0;
let winner;


const results = document.querySelector(".results");
const declaration = document.querySelector(".declaration");

//UI
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerScore < 5 && comScore < 5) {
            computerSelection = getComputerChoice();
            declaration.textContent = (playRound(button.className, computerSelection));
            results.textContent = ("You = " + playerScore + " / Com = " + comScore);
            console.log(comScore, playerScore);
        };
    });
});

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
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        winner = "player";
        playerScore = ++playerScore;
        return "You Win!";
    } else {
        winner = "com";
        comScore = ++comScore;
        return "You Lose!";
    }
};