const computersPick = Math.floor(Math.random()*3) +1;
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div= document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const choices = ["rock", "paper", "scissors"];


function game(userChoice){
  console.log(":poop\" + userChoice);
}

function main(){



rock_div.addEventListener('click', ()=> {
  game('hey');
})

paper_div.addEventListener('click', ()=> {
  game('pappa');
})

scissors_div.addEventListener('click', ()=> {
  game('kata');
})

}

main();
