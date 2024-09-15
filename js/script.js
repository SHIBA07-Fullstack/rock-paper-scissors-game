// Script for Rock Paper Scissor game

let text = document.querySelector("#demo");
const win = "You won against computer!";
const draw = "It's draw!";
const lose = "Computer won!";
let i;

// Getting random computer choice

function getComputerChoice(){
    let CompChoice;
    let randomNo;
    randomNo = Math.ceil(Math.random() * 3);
    if (randomNo == 1){
        CompChoice = 'rock';
    }
    else if (randomNo == 2){
        CompChoice = 'paper';
    }
    else{
        CompChoice = 'scissor';
    }
    return CompChoice;
}

// Getting human choice

function getHumanChoice() {
    
    let input = prompt("Enter your choice:");

    if(!input){
        return alert("Canceled");
    } 
    else if (input.toLowerCase() === "rock"||input.toLowerCase() === "paper"||input.toLowerCase() === "scissor"){
        return input = input.toLowerCase();  
    }
    else{ 
        alert("Enter valid choice:");
        return getHumanChoice();  
    }         
}

let humanScore = 0;
let computerScore = 0;

function playGame(){


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(humanSelection);

function playRound(humanChoice, computerChoice){

    // Took nested if else reference from "geeksforgeeks.org" otherwise code would have been multi line 
    
    if (humanChoice === computerChoice){
        alert("It's a tie!");
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore++;
            console.log("You lose! Paper beats rock.");
        }
        else {
            humanScore++;
            console.log("You win! Rock beats scissor.");
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissor"){
            computerScore++;
            console.log("You lose! Scissor beats paper");
        }
        else {
            humanScore++;
            console.log("You win! Paper beats rock.");
        }
    }
    else if(humanChoice === "scissor"){
        if (computerChoice === "rock"){
            computerScore++;
            console.log("You lose! Rock beats scissor.");
        }
        else {
            humanScore++;
            console.log("You win! Scissor beats paper.");
        }
    }
}

playRound(humanSelection, computerSelection);


}


for(i=1;i<=5;i++){
    
    playGame();
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

}



if(humanScore>computerScore){
    console.log("You won against computer!");
    text.textContent = win;
}
else if (humanScore === computerScore) {
    console.log("It's draw!");
    text.textContent = draw;
}
else {
    console.log("Computer won!");
    text.textContent = lose;
}