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
createBoard();

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2012/04/11/13/57/clubs-28334_960_720.png" alt="Queen of Clubs" />';  
	} else {
		this.innerHTML = '<img src="https://pixabay.com/static/uploads/photo/2012/04/11/15/10/hearts-28424_960_720.png" alt="King of Hearts" />';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = []; 
	} 
}

function isMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score = score +1;
		played = played + 1;
		updateStats();
	} else {
		alert("Sorry, try again");
		played = played + 1;
		updateStats();
	} 
	for (var i=0; i<cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML="";
	}
}

// stats counters
var displayedScore = document.getElementById('score');
var displayedPlayed = document.getElementById('played');
var displayedSuccess = document.getElementById('success');
var score= 0;
var played = 0;
var resetButton = document.getElementById('reset');

function updateStats() {
  displayedScore.innerHTML=score; // update displayed score
  displayedPlayed.innerHTML=played; // update displayed score
}

function resetStats(){
	score = 0;
	played = 0;
	success = (played / score) * 100;
	displayedScore.innerHTML=score;
	displayedPlayed.innerHTML=played;
}
resetButton.addEventListener('click',resetStats);
