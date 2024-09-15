// Script for Rock Paper Scissor game




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

    if (input.toLowerCase() === "rock"||input.toLowerCase() === "paper"||input.toLowerCase() === "scissor"){
        return input = input.toLowerCase();  
    }
    else if(!input){
        return alert("Canceled");
    } 
    else{ 
        alert("Enter valid choice:");
        return getHumanChoice();  
    }         
}

let humanScore = 0;
let computerScore = 0;
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

