let readline = require("readline-sync");

class Deck {
  static SUITS = ["H", "D", "C", "S"];
  static VALUES = [
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
  static initializeDeck() {
    let deck = [];
    Deck.SUITS.forEach((suit) => {
      Deck.VALUES.forEach((value) => {
        deck.push([suit, value]);
      });
    });
    return deck;
  }

  constructor() {
    this.deck = Deck.initializeDeck();
  }

  reinitializeDeck() {
    this.deck = Deck.initializeDeck();
  }

  shuffle() {
    for (let index = this.deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1));
      [this.deck[index], this.deck[otherIndex]] = [
        this.deck[otherIndex],
        this.deck[index],
      ];
    }
  }
  dealHand() {
    return this.deck.splice(0, 2);
  }
  removeCardFromDeck() {
    return this.deck.shift();
  }
}

class Participant {
  static joinOr(arr, delimiter = ", ", connectiveWord = "or") {
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

  static valueCard(cardFaceValue, currentTotal) {
    if (["J", "Q", "K"].includes(cardFaceValue)) return "10";
    if (cardFaceValue === "A") {
      return currentTotal > 10 ? "1" : "11";
    }
    return cardFaceValue;
  }

  valueHand() {
    return this.hand.reduce(
      (acc, cur) => Number(acc) + Number(Participant.valueCard(cur[1], acc)),
      0
    );
  }

  listCards() {
    return Participant.joinOr(
      this.hand.map((card) => card[1]),
      ", ",
      "and"
    );
  }

  addCardToHand(card) {
    this.hand.push(card);
  }

  isBusted() {
    return this.valueHand(this.hand) > 21;
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.hand = [];
    this.purse = 5;
  }

  getPurse() {
    return this.purse;
  }
  incrementPurse() {
    this.purse += 1;
  }
  decrementPurse() {
    this.purse -= 1;
  }
}

class Dealer extends Participant {
  constructor() {
    super();

    this.hand = [];
  }
}

class TwentyOneGame {
  static determineWinner(player, dealer) {
    let playerScore = player.valueHand();
    let dealerScore = dealer.valueHand();

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

  static displayWinner(winner) {
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

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }
  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.displayPurse();
      this.dealCards();
      this.showCards();
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
      if (this.player.getPurse() === 0) {
        console.log("u r broke");
        break;
      }
      if (this.player.getPurse() === 10) {
        console.log("you are going to make it");
        break;
      }
      console.log("Play again?");
      let answer = readline.question();
      if (answer === "no") break;
      this.deck.reinitializeDeck();
    }
    this.displayGoodbyeMessage();
  }

  displayPurse() {
    console.log(
      `You have ${this.player.getPurse()} dollars. Spend them wisely.`
    );
  }

  dealCards() {
    this.deck.shuffle();
    this.player.hand = this.deck.dealHand();
    this.dealer.hand = this.deck.dealHand();
  }

  showCards() {
    console.log(`Dealer has: ${this.dealer.hand[0][1]} and unknown card`);
  }

  playerTurn() {
    while (true) {
      console.log(
        `You have: ${this.player.listCards()} (${this.player.valueHand()})`
      );
      console.log("Hit or stay?");
      let answer = readline.question();
      if (answer === "stay") break;
      this.player.addCardToHand(this.deck.removeCardFromDeck());
      if (this.player.isBusted()) break;
    }
  }

  dealerTurn() {
    if (!this.player.isBusted()) {
      while (true) {
        console.log(
          `Dealer has: ${this.dealer.listCards()} (${this.dealer.valueHand()})`
        );
        console.log(
          `You have: ${this.player.listCards()} (${this.player.valueHand()})`
        );

        if (this.dealer.valueHand() >= 17) break;

        this.dealer.addCardToHand(this.deck.removeCardFromDeck());
      }
    }
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty One!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Twenty One! Goodbye!");
  }

  displayResult() {
    let winner = TwentyOneGame.determineWinner(this.player, this.dealer);
    if (winner === "player") {
      this.player.incrementPurse();
    } else if (winner === "dealer") {
      this.player.decrementPurse();
    }
    TwentyOneGame.displayWinner(winner);
  }
}

let game = new TwentyOneGame();
game.start();
