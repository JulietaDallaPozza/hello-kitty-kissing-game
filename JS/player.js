
let clicks = 0;
document.body.appendChild(kittyContainer);



kittyContainer.addEventListener("click", function () {
    let counterElement = document.getElementById("click-counter");
    counterElement.textContent = "KISSED: " + clicks;
});

return kittyContainer;


console.log(clicks);