// Script for Rock Paper Scissor game



function startGame(){

console.clear();
let text = document.querySelector("#demo");
const win = "You won against computer!";
const draw = "It's draw!";
const lose = "Computer won!";
let i;
let humanScore = 0;
let computerScore = 0;
document.getElementById("start").innerHTML = "Restart Game!";
text.textContent = text.textContent.slice(text.textContent.length);



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

// Playing a full game




for(i=1;i<=5;i++){ 
    

    setTimeout(function playGame(){
        
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(humanSelection);
        
        // Single game round function 
        
        function playRound(humanChoice, computerChoice){
        
        // Took nested if else reference from "geeksforgeeks.org" otherwise code would have been multi line 
            
            if (humanChoice === computerChoice){
                console.log("It's a tie!");
                alert("It's a tie!");
            }
            else if (humanChoice === "rock"){
                if (computerChoice === "paper"){
                    console.log("You lose! Paper beats rock.");
                    computerScore++;
                }
                else {
                    console.log("You win! Rock beats scissor.");
                    humanScore++;
                }
            }
            else if (humanChoice === "paper"){
                if (computerChoice === "scissor"){
                    console.log("You lose! Scissor beats paper");
                    computerScore++;
                }
                else {
                    console.log("You win! Paper beats rock.");
                    humanScore++;
                }
            }
            else if(humanChoice === "scissor"){
                if (computerChoice === "rock"){
                    console.log("You lose! Rock beats scissor.");
                    computerScore++;
                }
                else {
                    console.log("You win! Scissor beats paper.");
                    humanScore++;
                }
            }
        }
        
        playRound(humanSelection, computerSelection);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        
        
        }, "100");
}

setTimeout(()=> {if(humanScore>computerScore){
    console.log("You won against computer!");
    text.textContent = "You won against computer!";
}
else if (humanScore === computerScore) {
    console.log("It's draw!");
    text.textContent = "It's draw!";
}
else {
    console.log("Computer won!");
    text.textContent = "Computer won!";
}
}, "100");

}



