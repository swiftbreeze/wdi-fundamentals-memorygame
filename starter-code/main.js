var cards = ['queen','queen','king','king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card'; 
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		board.appendChild(newCard);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="queen-clubs.png" alt="Queen of Clubs" />';  
	} else {
		this.innerHTML = '<img src="king-hearts.png" alt="King of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = []; 
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

createBoard();