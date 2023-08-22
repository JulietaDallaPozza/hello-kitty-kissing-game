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
    let setInterval; // To store the interval for generating falling kitties

    startButton.addEventListener("click", function () {
        start();
    });

    function start() {
        console.log("KISS");
        startButton.disabled = true; // Disable the start button


        // Function to create a new Hello Kitty head element
        function createHelloKitty() {
            const kittyContainer = document.createElement("div");
            kittyContainer.classList.add("container");
            // Copy the Hello Kitty HTML structure into the new container
            kittyContainer.innerHTML = document.querySelector(".container").innerHTML;
            // Apply styles to the container, e.g., position, random rotation, etc.
            kittyContainer.style.position = "absolute";
            kittyContainer.style.transform = `rotate(${Math.random() * 360}deg)`;

            // Add event listener to remove the kitty when clicked
            kittyContainer.addEventListener("click", handleKittyClick);

            // Return the new Hello Kitty container
            return kittyContainer;
        }

        function startFalling(kitty) {
            const container = document.getElementById("game-container");
            container.appendChild(kitty); 
        
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
            // Function to handle Kitty click event
            function handleKittyClick(event) {
                const kitty = event.currentTarget;
                // Add your interaction logic here (e.g., score increment, animation, etc.)
                // Remove the kitty element
                kitty.remove();
            }



            // Rest of your existing code for handling kitty clicks and falling animation

            // Generate kitties and start falling animation



            // / Start generating falling kitties
            setInterval(() => {
                const newKitty = createHelloKitty();
                startFalling(newKitty);
            }, 1000);
        }



    };
