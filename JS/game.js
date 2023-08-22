// console.log('hello kitty');

// let clicks = 0;

// let btn = document.createElement("button");
// btn.textContent = "KISSED";
// document.body.appendChild(btn);

// btn.addEventListener("click", function () {
//     clicks++;
//     console.log(clicks);
//     btn.textContent = "KISSED: " + clicks;

// });


class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro"); //holds the div element #game-intro. To access the element, use either document.getElementById() or document.querySelector().
        this.displayScore = document.querySelector("#score");
        this.gameEndScreen = document.querySelector("#game-end");

        this.score = 0;
    }

    start() {
        console.log("started");
        this.startScreen.style.display = "none";
        this.gameLoop();
    }

    gameLoop() {

        function createHelloKitty() {
            const kittyContainer = document.createElement("div");
            kittyContainer.classList.add("container");
            kittyContainer.innerHTML = document.querySelector(".container").innerHTML;
            kittyContainer.style.position = "absolute";
            kittyContainer.style.transform = `rotate(${Math.random() * 360}deg)`;

            kittyContainer.addEventListener("click", handleKittyClick);

            return kittyContainer;
        }

        function handleKittyClick(event) {
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

