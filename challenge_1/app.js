console.log('is this working?')

count = 0;


var xAndO = function(box) {
  if (count % 2 === 0) {
    document.getElementById(box).innerHTML = 'X';
  } else {
    document.getElementById(box).innerHTML = 'O';
  }
}

document.getElementById("box1").addEventListener("click", () => {xAndO("box1"); count++;}) //callback anonymous or bind
document.getElementById("box2").addEventListener("click", () => {xAndO("box2"); count++;})
document.getElementById("box3").addEventListener("click", () => {xAndO("box3"); count++;})

document.getElementById("box4").addEventListener("click", () => {xAndO("box4"); count++;})
document.getElementById("box5").addEventListener("click", () => {xAndO("box5"); count++;})
document.getElementById("box6").addEventListener("click", () => {xAndO("box6"); count++;})

document.getElementById("box7").addEventListener("click", () => {xAndO("box7"); count++;})
document.getElementById("box8").addEventListener("click", () => {xAndO("box8"); count++;})
document.getElementById("box9").addEventListener("click", () => {xAndO("box9"); count++;})
