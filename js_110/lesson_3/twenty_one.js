// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

let readline = require("readline-sync");

const SUITS = ["H", "D", "C", "S"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function initializeDeck() {
  let deck = [];
  SUITS.forEach((suit) => {
    VALUES.forEach((value) => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}
function joinOr(arr, delimiter = ", ", connectiveWord = "or") {
  let length = arr.length;

  if (length === 0) {
    return "";
  } else if (length === 1) {
    return String(arr[0]);
  } else if (length === 2) {
    return `${arr[0]} ${connectiveWord} ${arr[1]}`;
  } else {
    let str = "";
    for (let i = 0; i < length - 1; i += 1) {
      str += arr[i] + delimiter;
    }
    str += connectiveWord + " " + arr[length - 1];
    return str;
  }
}

function valueCard(cardFaceValue, currentTotal) {
  if (["J", "Q", "K"].includes(cardFaceValue)) return "10";
  if (cardFaceValue === "A") {
    return currentTotal > 10 ? "1" : "11";
  }
  return cardFaceValue;
}

function valueHand(hand) {
  return hand.reduce(
    (acc, cur) => Number(acc) + Number(valueCard(cur[1], acc)),
    0
  );
}

function listCards(hand) {
  return joinOr(
    hand.map((card) => card[1]),
    ", ",
    "and"
  );
}

function determineWinner(playerHand, dealerHand) {
  let playerScore = valueHand(playerHand);
  let dealerScore = valueHand(dealerHand);

  if (playerScore === dealerScore || (playerScore > 21 && dealerScore > 21)) {
    return "tie";
  } else if (
    (playerScore <= 21 && playerScore > dealerScore) ||
    (dealerScore > 21 && playerScore <= 21)
  ) {
    return "player";
  } else if (
    (dealerScore <= 21 && dealerScore > playerScore) ||
    (playerScore > 21 && dealerScore <= 21)
  ) {
    return "dealer";
  } else {
    return console.log("This shouldn't have happened.");
  }
}

function displayWinner(winner) {
  if (winner === "tie") {
    console.log("You have tied!");
  } else if (winner === "dealer") {
    console.log("The dealer won!");
  } else if (winner === "player") {
    console.log("You won!");
  } else {
    console.log("This shouldn't have happened.");
  }
}

let deck = initializeDeck();
shuffle(deck);

let playerHand = deck.splice(0, 2);
let dealerHand = deck.splice(0, 2);

function busted() {
  return valueHand(playerHand) > 21;
}

while (true) {
  console.log(`Dealer has: ${dealerHand[0][1]} and unknown card`);
  console.log(`You have: ${listCards(playerHand)}`);
  console.log("Hit or stay?");
  let answer = readline.question();
  if (answer === "stay") break;
  playerHand.push(deck.shift());
  if (busted()) break;
}

if (busted()) {
  console.log("you busted");
} else {
  console.log("You chose to stay!");
}

while (true) {
  console.log(`Dealer has: ${listCards(dealerHand)}`);
  console.log(`You have: ${listCards(playerHand)}`);

  if (valueHand(dealerHand) >= 17) break;

  dealerHand.push(deck.shift());
}

let winner = determineWinner(playerHand, dealerHand);

displayWinner(winner);
