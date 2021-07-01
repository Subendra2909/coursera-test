
var cards = [];
var sum = 0;
var hasBlackJack = false;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEL = document.querySelector("#sum-el");
var cardsEL = document.querySelector("#cards-el");

var player = {
	name: "Per",
	chips: 145
}


var playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
	var randomNumber =  Math.floor( Math.random()*13 ) + 1;
	if( randomNumber === 1 ) {
		return 11;
	} else if ( randomNumber > 10) {
		return 10;
	} else {
		return randomNumber;
	}
}

function renderGame() {
	sumEL.textContent = "Sum: " + sum;
	cardsEL.textContent = "Cards: ";
	for (var i = 0; i < cards.length; i++){
		cardsEL.textContent += cards[i] + " ";
	}
	if (sum <= 20) {
		message = "Do you want another card?";
	} else if (sum === 21) {
		hasBlackJack = true;
		message = "You've got Blackjack!";
	} else {
		isAlive = false;
		message = "You're out of the game!";	
	}
	messageEl.textContent = message;
	  
}

function startGame() {
	isAlive = true;
	cards = [];
	var firstCard = getRandomCard();
	var secondCard = getRandomCard();
	sum = firstCard + secondCard; 
	cards.push(firstCard, secondCard);
	renderGame();
	}

function newCard() {
	if(hasBlackJack === false && isAlive === true) {
	var card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();
	}
	
}

