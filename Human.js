const { Player } = require("./Player");
const prompt = require("prompt-sync")();


class Human extends Player{
    constructor(name){
        super(name);
        this.choice = this.choice;
        this.score = 0;

    }

    chooseWeapon(){
        console.log("please choose a weapon 1 for rock, 2 for paper, 3 for scissors, 4 for lizard, 5 for spock! " ) 
        this.choice = prompt();
        switch (this.choice) {
            case "1":
                this.choice = this.weapons[0]
                break;

            case "2":
                this.choice = this.weapons[1]
                break;

            case "3":
                this.choice = this.weapons[2]
                break;
                
            case "4":
                this.choice = this.weapons[3]
                break;

            case "5":
                this.choice = this.weapons[4]
                break;

            default: 
                this.chooseWeapon();
                break;
        }
    }
}    





module.exports.Human = Human;