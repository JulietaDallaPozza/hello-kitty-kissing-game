

window.onload = function () {
    const startButton = document.getElementById("start-button");
    let game;

    startButton.addEventListener("click", () => {
        game = new Game(); // inizialisate the Game class when the button is clicked
        game.start(); // start the game
        console.log("game started");
    });
};
