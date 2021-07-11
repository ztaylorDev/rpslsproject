const { Player } = require("./Player");
const { Ai } = require("./Ai");
const { Human } = require("./Human");
const prompt = require("prompt-sync")();

class Game {
  constructor(name) {
    this.name = name;
    this.playerOne;
    this.playerTwo;
  }

  runGame() {
    this.displayRules();
    this.choosePlayers();
    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
     this.playerOne.chooseWeapon();
     this.playerTwo.chooseWeapon();   
      this.weaponWinners();
    }
  }
  weaponWinners() {
    if (this.playerOne.choice === "rock" && (this.playerTwo.choice === "scissors" || this.playerTwo.choice === "lizard")
    ) {
      this.playerOne.score++;
    } else if (this.playerOne.choice === "paper" && (this.playerTwo.choice === "rock" || this.playerTwo.choice === "spock")
    ) {
      this.playerOne.score++;
    } else if (this.playerOne.choice === "scissors" && (this.playerTwo.choice === "paper" || this.playerTwo.choice === "lizard")
    ) {
      this.playerOne.score++;
    } else if (this.playerOne.choice === "lizard" && (this.playerTwo.choice === "spock" || this.playerTwo.choice === "paper")
    ) {
      this.playerOne.score++;
    } else if (this.playerOne.choice === "spock" && (this.playerTwo.choice === "rock" || this.playerTwo.choice === "scissors")
    ) {
      this.playerOne.score++;
    } else if (this.playerTwo.choice === "rock" && (this.playerOne.choice === "scissors" || this.playerOne.choice === "lizard")
    ) {
      this.playerTwo.score++;
    } else if (this.playerTwo.choice === "paper" && (this.playerOne.choice === "rock" || this.playerOne.choice === "spock")
    ) {
      this.playerTwo.score++;
    } else if (this.playerTwo.choice === "scissors" && (this.playerOne.choice === "paper" || this.playerOne.choice === "lizard")
    ) {
      this.playerTwo.score++;
    } else if (this.playerTwo.choice === "lizard" && (this.playerOne.choice === "spock" || this.playerOne.choice === "paper")
    ) {
      this.playerTwo.score++;
    } else if (this.playerTwo.choice === "spock" && (this.playerOne.choice === "rock" || this.playerOne.choice === "scissors")
    ) {
      this.playerTwo.score++;
    }

    this.displayGameWinner();
  }

  displayRules() {
    console.log("Welcome to RPSLS");
    console.log("Two players will choose between RPSLS");
    console.log("The person who choses the winning choice will get a point");
    console.log("First player to three points wins!");
  }

  displayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
      console.log(this.playerOne.name + " wins this game!");
    } else {
      console.log(this.playerTwo.name + " wins this game!");
    }
  }

  choosePlayers() {
    let userInput2 = prompt(
        "please select a mode! press S for singleplayer or M multiplayer "
    ).toLowerCase();
    switch (userInput2) {
      case "s":
        this.playerOne = new Human("zach");
        this.playerTwo = new Ai("jarvis");

        break;

      case "m":
        this.playerOne = new Human("zach");
        this.playerTwo = new Human("mike");
        break;

      default:
        this.choosePlayers();
        break;
    }
  }

        
}

module.exports.Game = Game;
