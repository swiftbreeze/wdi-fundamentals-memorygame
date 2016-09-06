// find button element and store in variable
var buttonCreate = document.getElementById('btn-create');
// set up click handler
buttonCreate.addEventListener('click', createBoard);

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

// builds game board
function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div'); // create card
    newCard.className = 'card'; // add card class 
    newCard.setAttribute('data-card', cards[i]); // set data-card
    newCard.addEventListener('click', isTwoCards); // check cardsInPlay for match on each click
    document.getElementById('game-board').appendChild(newCard); // append card to board
  }
}

//checks to see if there are cards in play
function isTwoCards() {
  if (this.getAttribute('data-card') === 'queen') {
   this.innerHTML = '<img src="queen-clubs.png" alt="Queen of Clubs" />';  
  } else {
    this.innerHTML = '<img src="king-hearts.png" alt="King of Hearts" />';
 }
  cardsInPlay.push(this.getAttribute('data-card')); // add card to array of cards in play
  if (cardsInPlay.length === 2) { // if you have two cards in play check for a match

    isMatch(cardsInPlay); // pass the cardsInPlay as an argument to isMatch function
    cardsInPlay = []; // clear cards in play array for next try
  } 
}

function isMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again");
  } 
  for (var i=0; i<cards.length; i++) {
      document.getElementsByClassName('card')[i].innerHTML="";
    }
}