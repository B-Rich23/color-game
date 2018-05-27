var colors = generateRandomColors(6);


// var colors = [

// ];
var pickedColor = randomColor();
var squares = document.querySelectorAll('.square');
var displayColor = document.querySelector('#display');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#new');
var easy = document.querySelector('#easy');
var hard = document.getElementById('hard');
var isHard = true;

// helper function that selects random color from colors array
function randomColor() {
    var ran = Math.floor(Math.random() * colors.length);
    return colors[ran];
}

/* function captures random color generated by pickedColor function and assigns it to pickedColor variable and displays that value in the #display span */
function pickedColorDisplay() {
    // pickedColor = randomColor();
    displayColor.textContent = pickedColor;
}

// helper function that generates and returns a random rgb color
function makeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// function that generates a an array of random rgb colors
function generateRandomColors(num) {
    // make array
    var arr = [];

    // add number of random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(makeColor());
    }

    // return array
    return arr;

}

/* helper function that changes the background color of all the squares and the background color of the h1 element to match the pickedColor variable */
function changeColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
        h1.style.backgroundColor = pickedColor;
    }
}


function squareRandom() {

    for (var i = 0; squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
            }
        h1.style.backgroundColor = 'steelblue';

        squares[i].addEventListener('click', function () {
            if (this.style.backgroundColor === pickedColor) {
                message.textContent = "CORRECT!!!";
                reset.textContent = "Play again?";
                changeColors();

            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = "TRY AGAIN!!!";
            }
        });
    }
}

hard.addEventListener('click', function() {
    isHard = true;
    hard.classList.add('selected');
    easy.classList.remove('selected');
    colors = generateRandomColors(6);
    pickedColor = randomColor();
    pickedColorDisplay();
    squareRandom();
});

easy.addEventListener('click', function() {
    isHard = false;
    easy.classList.add('selected');
    hard.classList.remove('selected');
    colors = generateRandomColors(3);
    pickedColor = randomColor();
    pickedColorDisplay();
    squareRandom();
});

function newGame () {
    reset.addEventListener('click', function() {
        if (isHard === true) {
            colors = generateRandomColors(6);
            pickedColor = randomColor();
            pickedColorDisplay();
            reset.textContent = "New Colors";
            squareRandom();
        } else {
            colors = generateRandomColors(3);
            pickedColor = randomColor();
            pickedColorDisplay();
            reset.textContent = "New Colors";
            squareRandom();
        }
    });
}

pickedColorDisplay();
newGame();
squareRandom();


