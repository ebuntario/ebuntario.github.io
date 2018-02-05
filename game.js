var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++) {
// add intial colors to squares
squares[i].style.backgroundColor = colors[i];
// add click listeners to squares
squares[i].addEventListener('click', function() {
// grab color of clicked square
var clickedColor = this.style.backgroundColor;
// compare color to pickedColor
if (clickedColor === pickedColor) {
messageDisplay.textContent = 'Correct!';
changeColors(clickedColor);
h1.style.backgroundColor = clickedColor;
} else {
this.style.backgroundColor = '#fff';
messageDisplay.textContent = 'Try Again';
}
});
}

/**
 * It returns 10
 */
function changeColors(color) {
// loop through all squares
for (var i = 0; i < squares.length; i++) {
// change color to match given color
squares[i].style.backgroundColor = color;
}
}

/**
 * It returns 10
 */
function pickColor() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

/**
 * @param {num}
 * @return {string}
 */
function generateRandomColors(num){
// make an array
var arr = [];
// repeat num times
for (var i = 0; i < num; i++) {
// get random color and push into arr
arr.push(randomColor());
}
// return that array
return arr;
}

/**
 * @return {string}
 */
function randomColor(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return 'rgb(' + r + ', ' + g + ', '+ b + ')';
}
