//create variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// if (cardTwo === cardFour) {
// 	alert("You found a match!")
// } else if (cardThree === cardFour) {
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again")
// } 


// create function to build board
function createBoard() {
for (var i = 0; i < 4; i++) {
  // create card
  var newCard = document.createElement('div');

  // add a class... 
  newCard.className = 'card';

  // append card to board
  document.getElementById('game-board').appendChild(newCard);
}
}

// event to create board

// find button element and store in variable
var button = document.getElementById('create-btn');

// set up event handler
button.addEventListener('click', createBoard);