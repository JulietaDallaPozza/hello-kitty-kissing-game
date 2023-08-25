

window.onload = function () {
    const startButton = document.getElementById("start-button");
    const playMusic = document.getElementById("play-sound");
    const onTimerEnd = document.getElementById("on-timer-end");
    let game;

    startButton.addEventListener("click", () => {
        game = new Game();
        game.start();
        playMusic.play();
        toggleElementVisibility(onTimerEnd, false);
    });

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", () => {
        game = new Game();
        game.start();
        restartButton.style.display = "none";
        onTimerEnd.style.display = "none"; // Hide the on-timer-end element
    });
};

function toggleElementVisibility(element, hide) {
    element.style.display = hide ? "none" : "";
}





// window.onload = function () {
//     const startButton = document.getElementById("start-button");
//     const playMusic = document.getElementById("play-sound")
//     let game;

//     startButton.addEventListener("click", () => {
//         game = new Game(); // inizialisate the game class when the button is clicked
//         game.start(); // start the game

//         playMusic.play();

//     });

// };

// const restartButton = document.getElementById("restart-button");
// restartButton.addEventListener("click", () => {
//     game = new Game();
//     game.start();
//     restartButton.style.display = "none";
//     // this.onTimerEnd.style.display = "none";
//     // onTimerEnd.style.display = "none";
// });

