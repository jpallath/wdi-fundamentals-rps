////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move==="scissors"||"Scissors"){
        console.log("scissors")
    }
    else if (move==="rock"||"Rock"){
        console.log("rock")
    } 
    else if (move==="paper"||"Paper"){
        console.log("paper")
    }
    else {
        getInput()
    }
    return move;
}

function getComputerMove(move) {
    if (move==="scissors"||"Scissors"){
        console.log("scissors")
    }
    else if (move==="rock"||"Rock"){
        console.log("rock")
    } 
    else if (move==="paper"||"Paper"){
        console.log("paper")
    }
    else {
        randomPlay()
    }
    return move;
}


function getWinner(playerMove,computerMove) {
    var winner;
    if (Playermove === "rock" && Computermove === "scissors"){
        winner = "player"
    }
    else if (Playermove === "scissors" && Computermove === "paper"){
        winner = "player"
    }
    else if (Playermove === "paper" && Computermove === "rock"){
        winner = "player"
    }
    else if (Playermove === "scissors" && Computermove === "rock"){
        winner = "computer"
    }
    else if (Playermove === "paper" && Computermove === "scissors"){
        winner = "computer"
    }
    else if (Playermove === "rock" && Computermove === "paper"){
        winner = "computer"
    }
    else if (Playermove === "scissors" && Computermove === "scissors"){
        winner = "tie"
    }
    else if (Playermove === "paper" && Computermove === "paper"){
        winner = "tie"
    }
    else (Playermove === "rock" && Computermove === "rock"){
        winner = "tie"
    }
    return winner;
}

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var numberOfGames = 0, numberOfGames < playerWins, numberOfGames+=1){
        if (playerWins < 5 || computerWins < 5){
            getPlayerMove()
            getComputerMove()
            getWinner()
            if (winner == "player"){
                playerWins += 1;
            }
            else if (winner == "computer"){
                computerwins+= 1;
            }
            else {
                console.log("You have played" + numberOfGames);
            }

        }
        else {
            console.log("There is a winner!");
        }
    }
    return [playerWins, computerWins];
}


