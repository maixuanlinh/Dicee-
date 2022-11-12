function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

var randomNumber1 =  getRandomInt(6);
var randomNumber2 = getRandomInt(6);
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img1Name = "images/dice"+randomNumber1+".png";
var img2Name = "images/dice"+randomNumber2+".png";
img1.src = img1Name;
img2.src = img2Name;
var h1 = document.getElementById("h1");
if (randomNumber1 > randomNumber2) {
   h1.innerHTML = "Player 1 won";
} else if (randomNumber1 == randomNumber2) {
  h1.innerHTML = "Draw";
} else {
  h1.innerHTML = "Player 2 won";
}
