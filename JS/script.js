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
    let game;

    startButton.addEventListener("click", () => {
        game = new Game(); // inizialisate the Game class when the button is clicked
        game.start(); // start the game
        console.log("game started");
    });

};

// let button = document.querySelectorAll('.fa-star')[0];

// button.addEventListener('click', goldStar, false);

// window.addEventListener('webkitAnimationEnd', disableStar, false);
// window.addEventListener('animationend', disableStar, false);

// function goldStar() {
//     body.classList.add('star');
// }

// function disableStar() {
//     body.classList.remove('star');
// }

// console.log(star);

