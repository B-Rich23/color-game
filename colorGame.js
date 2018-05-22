var colors = [
   
];

var squares = document.querySelectorAll('.square');
var displayColor = document.querySelector('#display');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#new');
var colors = generateRandomColors(6);
var pickedColor;

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function pickedColorDisplay() {
    pickedColor = pickedColor();
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


function changeColors() {
    for (var i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
        h1.style.backgroundColor = pickedColor;
    }
}

function squareRandom() {
    for (var i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = '#232323';

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


function newGame () {
    reset.addEventListener('click', function() {
        pickedColorDisplay();
        squareRandom();
        // console.log('clicked');
    });
}

pickedColorDisplay();
newGame();

// colorMatch();
squareRandom();
