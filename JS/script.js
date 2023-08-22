// window.onload = function () {
//     const startButton = document.getElementById("start-button");
//     const restartButton = document.getElementById("restart-button");
//     let game = new Game();

//     startButton.addEventListener("click", function () {
//         startGame();
//     });

//     function startGame() {
//         game.start();
//         console.log("start game");

//         // Disable the start button after starting the game
//         startButton.disabled = true;
//     }
//     restartButton.addEventListener("click", function () {
//         // Reset game state
//         game.score = 0;
//         game.displayScore.textContent = "Score: " + game.score;
//         console.log('restart');

//         // Enable the start button again
//         startButton.disabled = false;
//     });

// };

window.onload = function () {
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function () {
        start();
    });

    function start() {
        console.log("KISS");
        startButton.disabled = true; // disable the start button


    
        }



    };
