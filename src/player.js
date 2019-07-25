class Player {

    static get P_HORSE() { return 'Horse' };
    static get P_CAR() { return 'Car' };

    constructor(name, beginning_location = 0) {
        this.name = name;
        this.position = beginning_location;
        this.rounds = 0;
        this.balance = 0;
    }

    advance(positions) {
        let new_position = (this.position + positions) % 40;
        if (this.position + positions >= 40) {
            this.balance += 200 * ((this.position + positions - new_position) / 40);
        }
        this.position = new_position;
    }

    play_turn() {
        //let step = Math.floor(Math.random() * 6) + 1; // one dice: random number between 1 and 6
        let step = Math.floor(Math.random() * 11) + 2; // two dice: random number between 2 and 12
        this.advance(step);
        this.rounds += 1;
    }
}

module.exports = { Player };
