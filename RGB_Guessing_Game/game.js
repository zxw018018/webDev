var numSqaures = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      if (this.textContent === 'EASY') {
        numSqaures = 3;
      } else {
        numSqaures = 6;
      }
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listener to squares
    squares[i].addEventListener('click', function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSqaures);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.background = 'steelblue';
}

resetButton.addEventListener('click', function() {
  reset();
});

function changeColors(color) {
  // loop through all sqaures
  for (var i = 0; i < squares.length; i++) {
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make a array
  var arr = [];
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick red from 0 to 255
  r = Math.floor(Math.random() * 256);
  // pick green from 0 to 255
  g = Math.floor(Math.random() * 256);
  // pick blue from 0 to 255
  b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}