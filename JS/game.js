

class Game {
    constructor() {  //creating properties of the game 
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.displayScore = document.querySelector("#score");
        this.gameTimerScreen = document.querySelector("#timer");
        this.restartButton = document.querySelector("#restart-button");
        this.endText = document.querySelector("#on-timer-end");
        this.secondsText = document.querySelector("#seconds-left")
        this.clicks = 0;
        this.height = 300;
        this.width = 200;
        this.score = 0;
        this.sec = 11;
    }

    start() { //function defition
        console.log("started");
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = "none";  // hiding the game screen to only show the start button 
        this.gameScreen.style.display = "block";
        this.intervalCounter = null; //initializes a variable for the counter
        this.intervalKitties = null; //same for the kittis
        this.gameLoop(); //calling functions
        this.startTimer();
    }

    startTimer() {
        // start a timer that runs every second
        this.intervalCounter = setInterval(() => {
            this.sec--; // decrease the seconds
            this.gameTimerScreen.innerHTML = this.sec;
            this.secondsText.innerHTML = 'sECondS LEft';
            //check if time is up and finish the lopp 
            if (this.sec < 1) {
                this.gameOver()
            }
        }, 1000)
    }


    gameLoop() {
        const self = this;
        function createHelloKitty() { // create a new container element
            const kittyContainer = document.createElement("div"); // add CSS class to the container
            kittyContainer.classList.add("container");  // copy HTML content from an existing container
            kittyContainer.innerHTML = document.querySelector(".container").innerHTML; // set CSS properties for positioning and rotation
            kittyContainer.style.position = "absolute";
            kittyContainer.style.transform = `rotate(${Math.random() * 360}deg)`; //is responsible for applying a random rotation transform to the kittyContainer element ...when this line of code is executed, it sets the transform property of the kittyContainer to a randomly generated rotation value, this results in the "kitty" element being rotated by a random angle between 0 and 360 degrees each time a new element is created.
            kittyContainer.addEventListener("click", handleKittyClick.bind(self), false);
            return kittyContainer;  // return the new container
        }

        function handleKittyClick(event) { //function that removes kitty by clicking them
            this.clicks++;
            this.displayScore.innerHTML = this.clicks;
            const kitty = event.currentTarget; // get the clicked "kitty" element by assigning this value to the kitty variable, the code is essentially capturing the clicked "kitty" element so that it can be manipulated further, such as being removed from the page using the kitty.remove() line of code that follows.
            kitty.remove();


            const kissSound = document.getElementById("kiss-sound");
            kissSound.play();

        }



        function startFalling(kitty) {
            const container = document.getElementById("game-container"); // get the game container
            container.appendChild(kitty); // add the "kitty" element to th e container
            const startPosition = Math.random() * 700 + 200; //gGenerate random initial position, rotation, and duration
            const startRotation = Math.random() * 360;
            const duration = Math.random() * 4000 + 2000;
            kitty.style.left = startPosition + "px";  // set initial position and rotation for the "kitty"
            kitty.style.transform = `rotate(${startRotation}deg)`;
            kitty.animate(
                [
                    { top: "-100px", opacity: 1 },
                    { top: `${window.innerHeight}px`, opacity: 0 },   // animate the "kitty" falling and fading out
                ],
                {
                    duration: duration,
                    easing: "ease-in-out",
                }
            ).onfinish = () => {
                kitty.remove(); // aemove the "kitty" element when the animation finishes
            };
        }

        // start generating falling kitties it's likely that this function generates falling "kitty" elements, starts their animations, and checks if the game time is up
        this.intervalKitties = setInterval(() => {
            const newKitty = createHelloKitty();    // create a new "kitty" element
            startFalling(newKitty);
            if (this.sec < 1) {
                this.gameOver()
            }
        }, 300);


    }

    gameOver() {
        this.endText.innerHTML = 'n0 mORe TiME for kITTY kiSSess';
        clearInterval(this.intervalKitties);
        clearInterval(this.intervalCounter);
        this.restartButton.style.display = "block";



    }

}


