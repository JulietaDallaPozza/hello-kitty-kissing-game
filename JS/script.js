

window.onload = function () {
    const startButton = document.getElementById("start-button");
    const playMusic = document.getElementById("play-sound")
    let game;

    startButton.addEventListener("click", () => {
        game = new Game(); // inizialisate the game class when the button is clicked
        game.start(); // start the game
        playMusic.play();
    });

};

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", () => {
        game = new Game();
        game.start(); 
        restartButton.style.display = "none";


    });

