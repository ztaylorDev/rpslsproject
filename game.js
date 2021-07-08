const Player = require("./Player");
const Ai = require("./Ai")
const Human = require("./Human")
const prompt = require("prompt-sync")(); 

class Game{
    constructor(name){
        this.name = name;
        this.playerOne;
        this.playerTwo;
        
    }
    
    runGame(){
        this.displayRules();
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){

            this.weaponWinners();
        }

    }
    weaponWinners(){
        
        if(this.playerOne.choice === 'rock' && (this.playerTwo.choice === 'scissors' || this.playerTwo.choice === 'lizard')){
        this.playerOne.score++;
        }
        else if(this.playerOne.choice === 'paper' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'spock')){
        this.playerOne.score++;
        }
        else if(this.playerOne.choice === 'scissors' && (this.playerTwo.choice === 'paper' || this.playerTwo.choice === 'lizard')){
        this.playerOne.score++;
        }
        else if(this.playerOne.choice === 'lizard' && (this.playerTwo.choice === 'spock' || this.playerTwo.choice === 'paper')){
        this.playerOne.score++;
        }
        else if(this.playerOne.choice === 'spock' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'scissors')){
        this.playerOne.score++;
        }
        else if(this.playerTwo.choice === 'rock' && (this.playerOne.choice === 'scissors' || this.playerOne.choice === 'lizard')){
        this.playerTwo.score++;
        }
        else if(this.playerTwo.choice === 'paper' && (this.playerOne.choice === 'rock' || this.playerOne.choice === 'spock')){
        this.playerTwo.score++;
        }
        else if(this.playerTwo.choice === 'scissors' && (this.playerOne.choice === 'paper' || this.playerOne.choice === 'lizard')){
        this.playerTwo.score++;
        }
        else if(this.playerTwo.choice === 'lizard' && (this.playerOne.choice === 'spock' || this.playerOne.choice === 'paper')){
        this.playerTwo.score++;
        }
        else if(this.playerTwo.choice === 'spock' && (this.playerOne.choice === 'rock' || this.playerOne.choice === 'scissors')){
        this.playerTwo.score++;
        }
        
        this.displayGameWinner();
    }

    displayRules(){
        console.log("Welcome to RPSLS");
        console.log("Two players will choose between RPSLS");
        console.log("The person who choses the winning choice will get a point");
        console.log("First player to three points wins!")
    }

    // displayGameWinner() {
    //     if(this.playerOne.score > this.playerTwo.score) {
    //       console.log(this.playerOne.name + " wins this game!");
    //     }
    //     else {
    //       console.log(this.playerTwo.name + " wins this game!");
    //     }
    // }
    


}


    

module.exports.Game = Game;