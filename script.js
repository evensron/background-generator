var css = document.querySelector("h3"); /* select h3*/
var color1 = document.querySelector(".color1"); /* select input class color1*/
var color2 = document.querySelector(".color2"); /* select input class color2*/
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ",";
}

// console.log(css);
// console.log(color1);
// console.log(color2);
//console.log(body);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
