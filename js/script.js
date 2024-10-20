// Script for Rock Paper Scissor game

let text = document.querySelector("#demo");
const win = "You won against computer!";
const draw = "It's draw!";
const lose = "Computer won!";
let i;
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor"); 
const image = document.createElement("img");
const image2 = document.createElement("img");
const pcChoice = document.querySelector(".computerChoice");
const playerChoice = document.querySelector(".playerChoice");
const announcementBox = document.querySelector(".announcementBox");
const playerScoreBox = document.querySelector(".playerNum");
const computerScoreBox = document.querySelector(".computerNum");
computerScoreBox.textContent = computerScore;
playerScoreBox.textContent = humanScore;

// Getting random computer choice

function getComputerChoice(){
    let CompChoice;
    let randomNo;
    randomNo = Math.ceil(Math.random() * 3);
    if (randomNo == 1){
        CompChoice = 'rock';
        image.src = "./imgs/fist-rock.png";
        image.setAttribute("style", "height: 150px; width: 150px;");
        pcChoice.appendChild(image);
    }
    else if (randomNo == 2){
        CompChoice = 'paper';
        image.src = "./imgs/hand-paper.png";
        image.setAttribute("style", "height: 150px; width: 150px;");
        pcChoice.appendChild(image);
    }
    else{
        CompChoice = 'scissor';
        image.src = "./imgs/scissors.png";
        image.setAttribute("style", "height: 150px; width: 150px;");
        pcChoice.appendChild(image);
    }
    return CompChoice;
}

let computerSelection;

// Getting human choice


    
rock.addEventListener("click", () =>{
    image2.src = "./imgs/fist-rock.png";
    image2.setAttribute("style", "height: 150px; width: 150px;");
    playerChoice.appendChild(image2);
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
   
paper.addEventListener("click", () =>{
    image2.src = "./imgs/hand-paper.png";
    image2.setAttribute("style", "height: 150px; width: 150px;");
    playerChoice.appendChild(image2);
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

scissor.addEventListener("click", () =>{
    image2.src = "./imgs/scissors.png";
    image2.setAttribute("style", "height: 150px; width: 150px;");
    playerChoice.appendChild(image2);
    humanSelection = "scissor";
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(humanSelection);
    playRound(humanSelection, computerSelection);
})
   

// Playing a full game
    

        // Single game round function 
        
function playRound(humanChoice, computerChoice){
   
        // Took nested if else reference from "geeksforgeeks.org" otherwise code would have been multi line 
            
    if (humanChoice === computerChoice){
        announcementBox.textContent = "It's a tie!";
    }
    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            announcementBox.textContent = "You lose! Paper beats rock.";
            computerScore++;
            computerScoreBox.textContent = computerScore;
        }
        else {
            announcementBox.textContent = "You win! Rock beats scissor.";
            humanScore++;
            playerScoreBox.textContent = humanScore;
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "scissor"){
            announcementBox.textContent = "You lose! Scissor beats paper";
            computerScore++;
            computerScoreBox.textContent = computerScore;
        }
        else {
            announcementBox.textContent = "You win! Paper beats rock.";
            humanScore++;
            playerScoreBox.textContent = humanScore;
        }
    }
    else if(humanChoice === "scissor"){
        if (computerChoice === "rock"){
            announcementBox.textContent = "You lose! Rock beats scissor.";
            computerScore++;
            computerScoreBox.textContent = computerScore;
        }
        else {
            announcementBox.textContent = "You win! Scissor beats paper.";
            humanScore++;
            playerScoreBox.textContent = humanScore;
        }
    }
    
    // Winner alert section

    setTimeout(() => {if(humanScore == 5){
        alert("YOU WON AGAINST COMPUTER!");
        location.reload();
    }
    else if(computerScore == 5){
        alert("COMPUTER WON AGAINST YOU!");
        location.reload();
    }
    }, 100);    
}
        
      

        
        
       








