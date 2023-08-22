console.log('hello kitty');




// Function to create hello Kitty head element

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

// function to start the falling animation for a kitty

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


