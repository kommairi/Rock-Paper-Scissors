  
    let humanScore = 0;
    let computerScore = 0; 

        function getComputerChoice() {
            const choice = ["rock", "paper", "scissors"];
            const random = Math.floor(Math.random() * choice.length);
            return choice[random]; 
        }

        //console.log(getComputerChoice());

        function getHumanChoice() {
    const text = prompt("What is your choice?");
    const result = text.toLowerCase();
    if (result !== "rock" && result !== "paper" && result !== "scissors") {
        alert("Please choose 'rock', 'paper', or 'scissors'");
        //return null; // Return null or a specific value to indicate an invalid choice
            getHumanChoice();
    }
    return result; 
    }


     // console.log(getHumanChoice();

        function playRound(humanChoice, computerChoice){
           if(humanChoice == "paper" && computerChoice == "rock"){
            // console.log("You win! Paper beats Rock");
              humanScore++;
      
           }
            else if(humanChoice == "rock" && computerChoice == "paper"){
            // console.log("You lose! Paper beats Rock");
              computerScore++;
           }
            else if(humanChoice == "paper" && computerChoice == "rock"){
              // console.log("You win! Paper beats Rock");
              humanScore++;
           }
            else if(humanChoice == "rock" && computerChoice == "scissors"){
              //console.log("You win! rock beats scissors");
              humanScore++;
           }
            else if(humanChoice == "scissors" && computerChoice == "rock"){
              //console.log("You lose! rock beats scissors");
              computerScore++;
           }
            else if(humanChoice == "scissors" && computerChoice == "paper"){
              //console.log("You win! scissors beats paper");
              humanScore++;
           }
            else if(humanChoice == "paper" && computerChoice == "scissors"){
              //console.log("You lose! scissors beats paper");
              computerScore++;
           }

             else if(humanChoice == "scissors" && computerChoice == "scissors"){
              //console.log("equal!");
  
           }

            else if(humanChoice == "paper" && computerChoice == "paper"){
              //console.log("equal!");

           }
             else if(humanChoice == "rock" && computerChoice == "rock"){
              //console.log("equal!");
           }




    }
        function playGame(){
          for(i = 0;i < 5; i++){
             const humanSelection = getHumanChoice();
             const computerSelection = getComputerChoice();
           playRound(humanSelection, computerSelection);
                   

         }
         if(humanScore > computerScore){
            alert("You win!");

           }
         else if(computerScore > humanScore){
            alert("You lose! Computer wins!")
           }
         else if(computerScore == humanScore){
            alert("Draw")
           }


    }
    playGame();


