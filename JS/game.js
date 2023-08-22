console.log('hello kitty');

let clicks = 0;

let btn = document.createElement("button");
btn.textContent = "KISSED";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    clicks++;
    console.log(clicks);
    btn.textContent = "KISSED: " + clicks;

});


class Game {
    constructor() {
        this.displayScore = document.querySelector("#score");
        this.startScreen = document.querySelector("#game-intro"); //holds the div element #game-intro. To access the element, use either document.getElementById() or document.querySelector().
        this.gameEndScreen = document.querySelector("#game-end");

        this.score = 0;
    }

    start() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
    }


}
