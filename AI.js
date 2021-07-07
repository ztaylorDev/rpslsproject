const { Player } = require("./Player");


class Ai extends Player{
    constructor(name){
        super(name);

    }

    chooseWeapon(){
        this.choice = this.weapons[Math.floor(Math.random()*this.weapons.length)];
    }
}
// for(let i = 0; i < this.weapons.length; i++){

// }

module.exports.Ai = Ai;