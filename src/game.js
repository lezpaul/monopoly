const Consts = require('./constants');
const Utilities = require('./utilities');


class Game {

    constructor(players) {
        if (players.length < 2 || players.length > 8) {
            throw new Error(Consts.Messages.CONSTRUCTOR_ERR_MSG_01);
        }
        Utilities.shuffle(players);
        this.players = players;
        this.rounds = 0;
    }

    play(turns) {
        for (let i = 0; i < turns; i++) {
            this.play_turn();
        }
    }

    play_turn() {
        this.rounds += 1;
        this.players.forEach(p => p.play_turn());
    }

    printPlayers() {
        this.players.forEach((p, index) => {
            console.log(`\tPlayer ${index + 1} - Name: ${p.name} - Position: ${p.position} - Rounds: ${p.rounds} - Balance: ${p.balance}`);
        });
    }
}


module.exports = { Game };
