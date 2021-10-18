console.log('is this working?')

var count = 0;
var play = 'yes';

var currentGame = [
  [ , , ],
  [ , , ],
  [ , , ]
]

var xAndO = function(box) {
  if (document.getElementById(box).innerText === '' && play === 'yes') {
    if (box === 'box1' || box === 'box2' || box === 'box3') {
      indexRow = 0;
    }
    if (box === 'box4' || box === 'box5' || box === 'box6') {
      indexRow = 1;
    }
    if (box === 'box7' || box === 'box8' || box === 'box9') {
      indexRow = 2;
    }
    if (box === 'box1' || box === 'box4' || box === 'box7') {
      indexCol = 0;
    }
    if (box === 'box2' || box === 'box5' || box === 'box8') {
      indexCol = 1;
    }
    if (box === 'box3' || box === 'box6' || box === 'box9') {
      indexCol = 2;
    }
    if (count % 2 === 0) {
      document.getElementById(box).innerHTML = 'X';
      currentGame[indexRow][indexCol] = 1;
    } else {
      document.getElementById(box).innerHTML = 'O';
      currentGame[indexRow][indexCol] = 0;
    }
  }
  console.log(currentGame);
}

var checkWin = function() {
  for (var i = 0; i < 3; i++) {
    if (currentGame[i][0] === currentGame[i][1] && currentGame[i][1] === currentGame[i][2]) {
      if (currentGame[i][0] === 1) {
        var winner = 'X';
        play = 'no'
        alert('Winner is ' + winner);
      } else if (currentGame[i][0] === 0) {
        var winner = 'O';
        play = 'no'
        alert('Winner is ' + winner);
      }
    }
  }
  for (var i = 0; i < 3; i++) {
    if (currentGame[0][i] === currentGame[1][i] && currentGame[1][i] === currentGame[2][i]) {
      if (currentGame[0][i] === 1) {
        var winner = 'X';
        play = 'no'
        alert('Winner is ' + winner);
      } else if (currentGame[0][i] === 0) {
        var winner = 'O';
        play = 'no'
        alert('Winner is ' + winner);
      }
    }
  }
  if (currentGame[0][0] === currentGame[1][1] && currentGame[1][1] === currentGame[2][2]) {
    if (currentGame[0][0] === 1) {
      var winner = 'X';
      play = 'no'
        alert('Winner is ' + winner);
    }
    if (currentGame[0][0] === 0) {
      var winner = 'O';
      play = 'no'
        alert('Winner is ' + winner);
    }
  }
  if (currentGame[0][2] === currentGame[1][1] && currentGame[1][1] === currentGame[2][0]) {
    if (currentGame[0][2] === 1) {
      var winner = 'X';
      play = 'no'
        alert('Winner is ' + winner);
    }
    if (currentGame[0][2] === 0) {
      var winner = 'O';
      play = 'no'
        alert('Winner is ' + winner);
    }
  }
}

var reset = function() {
  for (var i = 1; i < 10; i++) {
    var box = 'box' + i;
    document.getElementById(box).innerHTML = '';
  }
  currentGame = [[,,],[,,],[,,]]
  play = 'yes'
  count = 0;
}

document.getElementById("box1").addEventListener("click", () => {xAndO("box1"); checkWin(); count++;}) //callback anonymous or bind
document.getElementById("box2").addEventListener("click", () => {xAndO("box2"); checkWin(); count++;})
document.getElementById("box3").addEventListener("click", () => {xAndO("box3"); checkWin(); count++;})

document.getElementById("box4").addEventListener("click", () => {xAndO("box4"); checkWin(); count++;})
document.getElementById("box5").addEventListener("click", () => {xAndO("box5"); checkWin(); count++;})
document.getElementById("box6").addEventListener("click", () => {xAndO("box6"); checkWin(); count++;})

document.getElementById("box7").addEventListener("click", () => {xAndO("box7"); checkWin(); count++;})
document.getElementById("box8").addEventListener("click", () => {xAndO("box8"); checkWin(); count++;})
document.getElementById("box9").addEventListener("click", () => {xAndO("box9"); checkWin(); count++;})

document.getElementById("reset").addEventListener("click", reset)
