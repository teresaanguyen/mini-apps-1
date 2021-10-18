console.log('is this working?')


var xAndO = function(box) {
  document.getElementById(box).innerHTML = 'X';
  // count = 0;
  // if (count % 2 === 0) {
  //   document.getElementById(box).innerHTML = 'O';
  //   count++;
  // } else {
  //   document.getElementById(box).innerHTML = 'O';
  //   count++;
  // }
}

document.getElementById("box1").addEventListener('click', xAndO("box1"))
document.getElementById("box2").addEventListener('click', xAndO("box2"))
document.getElementById("box3").addEventListener('click', xAndO("box3"))

document.getElementById("box4").addEventListener('click', xAndO("box4"))
document.getElementById("box5").addEventListener('click', xAndO("box5"))
document.getElementById("box6").addEventListener('click', xAndO("box6"))

document.getElementById("box7").addEventListener('click', xAndO("box7"))
document.getElementById("box8").addEventListener('click', xAndO("box8"))
document.getElementById("box9").addEventListener('click', xAndO("box9"))
