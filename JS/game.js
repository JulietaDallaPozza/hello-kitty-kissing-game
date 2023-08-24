
class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.displayScore = document.querySelector("#score");
        this.gameTimerScreen = document.querySelector("#timer");
        this.restartButton = document.querySelector("#restart-button");

        this.clicks = 0;
        this.height = 300;
        this.width = 200;
        this.score = 0;
        this.sec = 2;
    }

    start() {
        console.log("started");
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.intervalCounter = null;
        this.intervalKitties = null;
        this.gameLoop();
        this.startTimer();
    }

    startTimer() {

        this.intervalCounter = setInterval(() => {
            this.sec--;
            this.gameTimerScreen.innerHTML = this.sec;
            if (this.sec < 1) {
                this.gameOver()
            }
        }, 1000)
    }


    gameLoop() {
        const self = this;
        function createHelloKitty() {
            const kittyContainer = document.createElement("div");
            kittyContainer.classList.add("container");
            kittyContainer.innerHTML = document.querySelector(".container").innerHTML;
            kittyContainer.style.position = "absolute";
            kittyContainer.style.transform = `rotate(${Math.random() * 360}deg)`;
            kittyContainer.addEventListener("click", handleKittyClick.bind(self), false);
            return kittyContainer;
        }

        function handleKittyClick(event) {
            this.clicks++;
            this.displayScore.innerHTML = this.clicks;
            const kitty = event.currentTarget;
            kitty.remove();
        }



        function startFalling(kitty) {
            const container = document.getElementById("game-container");
            container.appendChild(kitty);
            const startPosition = Math.random() * 700 + 200;
            const startRotation = Math.random() * 360;
            const duration = Math.random() * 4000 + 2000;
            kitty.style.left = startPosition + "px";
            kitty.style.transform = `rotate(${startRotation}deg)`;
            kitty.animate(
                [
                    { top: "-100px", opacity: 1 },
                    { top: `${window.innerHeight}px`, opacity: 0 },
                ],
                {
                    duration: duration,
                    easing: "ease-in-out",
                }
            ).onfinish = () => {
                kitty.remove();
            };
        }

        // start generating falling kitties
        this.intervalKitties = setInterval(() => {
            const newKitty = createHelloKitty();
            startFalling(newKitty);
            if (this.sec < 1) {
                this.gameOver()
            }
        }, 300);


    }

    gameOver() {
        this.gameTimerScreen = document.querySelector("#on-timer-end");
        // this.gameTimerScreen.innerHTML = 'n0 mORe TiME for kITTY kiSSess';
        clearInterval(this.intervalKitties);
        clearInterval(this.intervalCounter);
        this.restartButton.style.display = "block";



    }

}


