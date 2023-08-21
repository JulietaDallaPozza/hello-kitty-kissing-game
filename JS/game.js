// // Function to create a new Hello Kitty head element
// function createHelloKitty() {
//   const kittyContainer = document.createElement("div");
//   kittyContainer.classList.add("container");
//   // Copy the Hello Kitty HTML structure into the new container
//   kittyContainer.innerHTML = document.querySelector(".container").innerHTML;
//   // Apply styles to the container, e.g., position, random rotation, etc.
//   kittyContainer.style.position = "absolute";
//   kittyContainer.style.transform = `rotate(${Math.random() * 360}deg)`;

//   // Add event listener to remove the kitty when clicked
//   kittyContainer.addEventListener("click", handleKittyClick);

//   // Return the new Hello Kitty container
//   return kittyContainer;
// }

// // Function to handle Kitty click event
// function handleKittyClick(event) {
//   const kitty = event.currentTarget;
//   // Add your interaction logic here (e.g., score increment, animation, etc.)
//   // Remove the kitty element
//   kitty.remove();
// }

// // Function to start the falling animation for a kitty
// function startFalling(kitty) {
//   const container = document.getElementById("game-container");
//   container.appendChild(kitty);

//   const startPosition = Math.random() * (window.innerWidth - 100);
//   const startRotation = Math.random() * 360;
//   const duration = Math.random() * 4000 + 2000;

//   kitty.style.left = `${startPosition}px`;
//   kitty.style.transform = `rotate(${startRotation}deg)`;

//   kitty.animate(
//     [
//       { top: "-100px", opacity: 1 },
//       { top: `${window.innerHeight}px`, opacity: 0 },
//     ],
//     {
//       duration: duration,
//       easing: "ease-in-out",
//     }
//   ).onfinish = () => {
//     kitty.remove();
//   };
// }

// // Start generating falling kitties
// setInterval(() => {
//   const newKitty = createHelloKitty();
//   startFalling(newKitty);
// }, 1000);
