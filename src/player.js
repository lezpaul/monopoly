const Consts = require('./constants');


class Player {

    constructor(name, beginning_location = 0) {
        this.name = name;
        this.position = beginning_location;
        this.rounds = 0;
        this.balance = 0;
    }

    advance(step) {
        // determine new position
        let new_position = (this.position + step) % Consts.Board.TOTAL_POSITIONS;
        // while moving, every time a player "lands on go" or "pass over go" he receive $200
        if (this.position + step >= Consts.Board.TOTAL_POSITIONS) {
            let times_landed_on_go = (this.position + step - new_position) / Consts.Board.TOTAL_POSITIONS;
            this.balance += Consts.Board.LAND_ON_GO_REWARD * times_landed_on_go;
        }
        // new position can lead to another action
        this.position = new_position;
        switch (new_position) {
            case Consts.Board.POSITIONS.GO_TO_JAIL:
                this.position = Consts.Board.POSITIONS.JUST_VISITING;
                break;
            case Consts.Board.POSITIONS.INCOME_TAX:
                if (this.balance * Consts.Board.INCOME_TAX_PERC > Consts.Board.INCOME_TAX_ABS) {
                    this.balance -= Consts.Board.INCOME_TAX_ABS;
                } else {
                    this.balance = Math.round(this.balance * (1 - Consts.Board.INCOME_TAX_PERC));
                }
                break;
            case Consts.Board.POSITIONS.LUXURY_TAX:
                if (this.balance > Consts.Board.LUXURY_TAX) {
                    this.balance -= Consts.Board.LUXURY_TAX;
                } else {
                    this.balance = 0;
                }
                break;
            default:
                break;
        }
    }

    play_turn() {
        let step = Math.floor(Math.random() * 11) + 2; // two dice: random number between 2 and 12
        //let step = Math.floor(Math.random() * 6) + 1; // one dice: random number between 1 and 6     
        this.advance(step);
        this.rounds += 1;
    }
}


module.exports = { Player };
