var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll('.square');

function squareRandom () {
    for (var i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = "" + colors[i] + "";
    }   
}

squareRandom();