// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];

var squares = document.querySelectorAll('.square');
var pickedColor = pickedColor();
var displayColor = document.querySelector('#display');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#new');
var colors = [generateRandomColors(6)];

function squareRandom() {
    for (var i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener('click', function () {
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = "CORRECT!!!";
                changeColors();
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = "TRY AGAIN!!!";
            }
        });    
    }   
}

function pickedColorDisplay() {
    displayColor.textContent = pickedColor;   
}

// function colorMatch() {
//     for (var i = 0; squares.length; i++) {
//         squares[i].addEventListener('click', function () {
//             if (this.style.backgroundColor === pickedColor) {
//                 console.log('clicked');                
//             }
//         });    
//     }

// }
function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors() {
    for (var i = 0; squares.length; i++) {
            squares[i].style.backgroundColor = pickedColor;
            h1.style.backgroundColor = pickedColor;
    }
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(num) {
    // make array
    var arr = [];

    // add number of random colors to array
    for (var i = 0; i < num; i++) {
        // randomColor();
        arr.push(randomColor());
    }

    // return array
    return arr;

}

function newGame () {
    reset.addEventListener('click', function() {
        squareRandom();
        // console.log('clicked');
    });
}

pickedColorDisplay();
newGame();

// colorMatch();
squareRandom();
