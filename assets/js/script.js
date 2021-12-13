//Options for computer choice
var choices = ["R", "P", "S"];

//starting number for stats screen
var wins = 0;
var losses = 0;
var ties = 0;

const playNowBtn = document.getElementById("playNow");
const thanksForPlaying = document.getElementById("thanksForPlaying");

 //Set function to use when player hits cancel
function showExitMessage() {
    thanksForPlaying.classList.remove("hidden");
};

// Hide the h1 and button when the game ends
function hideGame() {
    document.getElementById("game").classList.add("hidden");
};

function playRPS() {
    //Ask user for their choice
    var gameChoice = window.prompt("Choose R, P, or S:");

    //If user hits cancel, show the hidden text, and exits the game
    if (gameChoice === null) {
        showExitMessage();
        hideGame();
        return;
    }

    //Convert user input to uppercase
    gameChoice = gameChoice.toUpperCase();

    //Randomize computer choice
    var random = Math.floor(Math.random() * choices.length);
    var compChoice = choices[random];

    //If user selected an appropriate letter
    if (gameChoice === "R" || gameChoice === "P" || gameChoice === "S") {
        //Show computer choice
        window.alert("The computer chose " + compChoice);
    } else { //Only accept r, p, s. Also detects if user trys to submit blank field
        window.alert("Please choose R, P, or S only");
        playRPS();
    }

    // If choices are the same, it's a tie
    if (gameChoice === compChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        // Check for wins 
        (gameChoice === "R" && compChoice === "S") ||  
        (gameChoice === "P" && compChoice === "R") ||  
        (gameChoice === "S" && compChoice === "P")
    ) {
        wins++;
        window.alert("You win!");

        
    } else {
        // If user didn't win, they lost.
        losses++;
        window.alert("You lost!");
    }

    //Show Stats
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    //Ask user to play again
    var playAgain = window.confirm("Play again?");

    //Run game again
    if (playAgain) {
        playRPS();
    } else { //Show hidden text and exit game
        showExitMessage();
        hideGame(); 
        return;
    }
};

playNowBtn.addEventListener("click", playRPS);



