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
    var type = this.getAttribute('data-card');
	cardsInPlay.push(type);
	if (type === 'queen') {
		this.innerHTML = '<img src="queen-clubs.png" alt="Queen of Clubs" />';
	} else {
		this.innerHTML = '<img src="king-hearts.png" alt="King of Hearts" />';
	} 
	if (cardsInPlay.length === 2) {
		setTimeout(isMatch.bind(null, cardsInPlay),200);
		cardsInPlay = []; 
	} 
}

                   
function isMatch(cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 1;
		played += 1;
		updateStats();
	} else {
		alert("Sorry, try again");
		played += 1;
		updateStats();
	} 
	for (var i=0; i<cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML="";
	}
}

// stats counters
var displayedScore = document.getElementById('score');
var displayedPlayed = document.getElementById('played');
var score= 0;
var played = 0;
var resetButton = document.getElementById('reset');

function updateStats() {
  displayedScore.innerHTML=score; // update displayed score
  displayedPlayed.innerHTML=played; // update displayed num
}

function resetStats(){
	score = 0;
	played = 0;
	displayedScore.innerHTML=score;
	displayedPlayed.innerHTML=played;
}
resetButton.addEventListener('click',resetStats);
