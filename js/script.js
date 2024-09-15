// Script for Rock Paper Scissor game

let humanScore = 0;
let computerScore = 0;

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
        CompChoice = 'scissors';
    }
    return CompChoice;
}

// Getting human choice

function getHumanChoice() {
    
    const input = prompt("Enter your choice:");

    if(!input){
        return alert("Canceled");
    } 
    else if(input.toLowerCase() === "rock"||input.toLowerCase() === "paper"||input.toLowerCase() === "scissors"){
        return input.toLowerCase();  
    }
    else{ 
        alert("Enter valid choice:");
        return getHumanChoice();  
    }         
}
console.log(getComputerChoice());
console.log(getHumanChoice());

