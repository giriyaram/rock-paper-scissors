let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userResult = document.querySelector("#user-score");
const compResult = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userResult.innerHTML = userScore;
        console.log("You Win!");
    }else{
        compScore++;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compResult.innerHTML = compScore;
        console.log("You lose!");
    }
}


const playGame = (userChoice) => {
   const compChoice = genCompChoice();

   if(userChoice == compChoice){
    drawGame();
}else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }   
};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click" , () => {
        playGame(userChoice);
    });
});