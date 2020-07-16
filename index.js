// Generating random numbers from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Variables concatenating the random number to src value
var srcRandom1 = "images/dice" + randomNumber1 + ".png"
var srcRandom2 = "images/dice" + randomNumber2 + ".png"

// Setting the src attribute for the image tag
document.querySelector(".img1").setAttribute("src", srcRandom1)
document.querySelector(".img2").setAttribute("src", srcRandom2)

// Changing the title to display a winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("#header").textContent = "Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("#header").textContent = "Player 2 wins!"
} else if (randomNumber1 = randomNumber2) {
    document.querySelector("#header").textContent = "Draw!"
}