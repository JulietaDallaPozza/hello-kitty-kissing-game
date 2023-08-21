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




