//alert(11111);
// $("h1").on("click", function () {
//   $(this).text("");
//   $("body").css("background-color", "#ffffff");

//   $("img").attr("src", "img/logo1.jpeg").css("width", "100%");
//   var random = Math.floor(Math.random() * 3);
//   if (random === 0) {
//     $("img").attr("src", "img/janken_choki.png");
//   } else if (random === 1) {
//     $("img").attr("src", "img/janken_pa.png");
//   } else if (random === 2) {
//     $("img").attr("src", "img/hand_gu-2.png");
// }
// });
const choices = ["rock", "paper", "scissors"];
const outcomes = {
  rock: { beats: "scissors", message: "Rock smashes Scissors. You win!" },
  paper: { beats: "rock", message: "Paper covers Rock. You win!" },
  scissors: { beats: "paper", message: "Scissors cut Paper. You win!" },
};
let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }
$("#input button").on("click", function () {
  const playerChoice = this.id;
  const computerChoice = computerPlay();
  $("#computer-choice").text(computerChoice);
  $("#player-choice").text(playerChoice);

  // Set images for player and computer choices
  $("#player-img").attr("src", "img/" + playerChoice + ".png");
  $("#computer-img").attr("src", "img/" + computerChoice + ".png");

  if (playerChoice === computerChoice) {
    $("#outcome").text("It's a tie!");
  } else if (outcomes[playerChoice].beats === computerChoice) {
    $("#outcome").text(outcomes[playerChoice].message);
    playerScore++;
    
  } else {
    $("#outcome").text("Computer wins! Try again.");
    computerScore++;
  }
  $("#playerscore").text("Player Win: " + playerScore);
  $("#computerscore").text("Computer Win : " + computerScore);
});

$("#restart").on("click", function () {
    location.reload();
});