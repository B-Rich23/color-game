var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var displayColor = document.querySelector('#display');
var message = document.getElementById('message');

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

function changeColors() {
    for (var i = 0; squares.length; i++) {
            squares[i].style.backgroundColor === pickedColor;
                console.log('clicked');           
    }
}

pickedColorDisplay();
// colorMatch();
squareRandom();
