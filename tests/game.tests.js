const expect = require('chai').expect;
const Game = require('../src/game').Game;
const Player = require('../src/player').Player;


describe('Game Class Tests - As a game, I execute 20 rounds so that I can complete a game.', () => {

    it('Create a game with two players named Horse and Car', () => {
        let horse = new Player(Player.P_HORSE);
        let car = new Player(Player.P_CAR);
        let players = [horse, car];
        expect(new Game(players)).to.be.an.instanceOf(Game);
    });

    it('Try to create a game with < 2 players. When attempting to play the game, it will fail', () => {
        let horse = new Player(Player.P_HORSE);
        let players = [horse];
        expect(function () { new Game(players) }).to.throw(Error, Game.CONSTRUCTOR_ERR_MSG_01);
    });

    it('Try to create a game with > 8 players. When attempting to play the game, it will fail', () => {
        let players = [];
        for (let i = 0; i < 10; i++) {
            players[i] = new Player(`Horse_${i}`);
        }
        expect(function () { new Game(players) }).to.throw(Error, Game.CONSTRUCTOR_ERR_MSG_01);
    });

    it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur', () => {
        let horse = new Player(Player.P_HORSE);
        let car = new Player(Player.P_CAR);
        let players = [horse, car];
        let horse_car_case = false;
        let car_horse_case = false;
        for (let i = 0; i < 100; i++) {
            let game = new Game(players);
            horse_car_case |= (JSON.stringify(game.players) === JSON.stringify([horse, car]));
            car_horse_case |= (JSON.stringify(game.players) === JSON.stringify([car, horse]));
        }
        expect(Boolean(horse_car_case)).to.be.true;
        expect(Boolean(car_horse_case)).to.be.true;
    });
});


describe('Game Class Tests - As a game, I can have between 2 and 8 players with an initial random ordering.', () => {

    it('Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds', () => {
        let horse = new Player(Player.P_HORSE);
        let car = new Player(Player.P_CAR);
        let players = [horse, car];
        let game = new Game(players);
        game.play(20);
        expect(game).to.have.property('rounds', 20);
        players.forEach((p) => {
            expect(p).to.have.property('rounds', 20);
        });
    });

    it('Create a game and play, verify that in every round the order of the players remained the same', () => {
        let horse = new Player(Player.P_HORSE);
        let car = new Player(Player.P_CAR);
        let players = [horse, car];
        let game = new Game(players);
        let game_players = game.players;
        for (let i = 0; i < 20; i++) {
            game.play(1);
            expect(game.players).to.eq(game_players);
        }
    });
});
