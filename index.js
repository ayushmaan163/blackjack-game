let cardArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const randomIndex1 = Math.floor(Math.random() * cardArr.length);
const randomIndex2 = Math.floor(Math.random() * cardArr.length);

let firstCard = cardArr[randomIndex1];
let secondCard = cardArr[randomIndex2];
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");

let player = {
  name: "Peter",
  chips: 1000,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const randomIndex = Math.floor(Math.random() * cardArr.length);
    let card = cardArr[randomIndex];
    newCardEl.textContent = "New Card: " + card;
    sum += card;
    renderGame();
  }
}
