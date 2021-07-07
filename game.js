const Player = require("./Player");
const Ai = require("./Ai")
const Human = require("./Human")

class Game{
    constructor(name){
        this.name = name;
        this.playerOne;
        this.playerTwo;
    }

    test(){
        if(this.playerOne.choice === 'rock' && (this.playerTwo.choice === 'scissors' || this.playerTwo.choice === 'lizard')){
            this.playerOne.score++;
        }
        if(this.playerOne.choice === 'paper' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'spock')){
            this.playerOne.score++;
        }
        if(this.playerOne.choice === 'scissors' && (this.playerTwo.choice === 'paper' || this.playerTwo.choice === 'lizard')){
            this.playerOne.score++;
        }
        if(this.playerOne.choice === 'lizard' && (this.playerTwo.choice === 'spock' || this.playerTwo.choice === 'paper')){
            this.playerOne.score++;
        }
        if(this.playerOne.choice === 'spock' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'scissors')){
            this.playerOne.score++;
        }
        if(this.playerTwo.choice === 'rock' && (this.playerOne.choice === 'scissors' || this.playerOne.choice === 'lizard')){
            this.playerTwo.score++;
        }
        if(this.playerTwo.choice === 'paper' && (this.playerOne.choice === 'rock' || this.playerOne.choice === 'spock')){
            this.playerTwo.score++;
        }
        if(this.playerTwo.choice === 'scissors' && (this.playerOne.choice === 'paper' || this.playerOne.choice === 'lizard')){
            this.playerTwo.score++;
        }
        if(this.playerTwo.choice === 'lizard' && (this.playerOne.choice === 'spock' || this.playerOne.choice === 'paper')){
            this.playerTwo.score++;
        }
        if(this.playerTwo.choice === 'spock' && (this.playerOne.choice === 'rock' || this.playerOne.choice === 'scissors')){
            this.playerTwo.score++;
        }
        
        

    
    }


}

module.exports.Game = Game;