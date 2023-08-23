class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.displayScore = document.querySelector("#score");
        this.gameEndScreen = document.querySelector("#game-end");
        this.clicks = 0;
        this.height = 300;
        this.width = 200;
        this.score = 0;
    }

    start() {
        console.log("started");
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop() {
        // this.startScreen.style.display = "none";
        // this.gameScreen.style.display = "none";

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
            const startPosition = Math.random() * (window.innerWidth - 100);
            const startRotation = Math.random() * 360;
            const duration = Math.random() * 4000 + 2000;
            kitty.style.left = `${startPosition}px`;
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
        setInterval(() => {
            const newKitty = createHelloKitty();
            startFalling(newKitty);
        }, 1000);
    }
}
