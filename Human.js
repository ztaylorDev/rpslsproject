const { Player } = require("./Player");


class Human extends Player{
    constructor(name){
        super(name);

    }

    chooseWeapon(){
        let userInput = prompt("please choose a weapon rock, paper, scissors, lizard, spock! " ) 
        switch (userInput) {
            case "rock":
                this.choice = this.weapons[0]
                break;

            case "paper":
                this.choice = this.weapons[1]
                break;

            case "scissors":
                this.choice = this.weapons[2]
                break;
                
            case "lizard":
                this.choice = this.weapons[3]
                break;

            case "spock":
                this.choice = this.weapons[4]
                break;

            default: 
                this.chooseWeapon();
                break;
        }
    }
}    





module.exports.Human = Human;