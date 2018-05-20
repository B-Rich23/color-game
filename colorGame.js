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

function squareRandom () {
    for (var i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click', function () {
            if (this.style.backgroundColor === pickedColor) {
                console.log(pickedColor);
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


pickedColorDisplay();
// colorMatch();
squareRandom();
