const expect = require('chai').expect;
const Player = require('../src/player').Player;


describe('Player Class Tests - As a player, I can take a turn so that I can move around the board.', () => {

	it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
		let p1 = new Player(Player.P_CAR);
		p1.advance(7);
		expect(p1).to.have.property('position', 7);
	});

	it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
		let p1 = new Player(Player.P_CAR, 39);
		p1.advance(6);
		expect(p1).to.have.property('position', 5);
	});
});

describe('Player Class Tests - As a player, when I land on go I get $200 as my salary for staying in the game.', () => {

	it('During a turn a Player lands on Go and their balance increases by $200.', () => {
		let p1 = new Player(Player.P_CAR, 36);
		p1.advance(4);
		expect(p1).to.have.property('balance', 200);
	});

	it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
		let p1 = new Player(Player.P_CAR, 36);
		p1.advance(3);
		expect(p1).to.have.property('balance', 0);
	});
});

describe('Player Class Tests - As a player, I receive $200 when I pass over Go.', () => {

	it('Player starts before Go near the end of the Board, rolls enough to pass Go. The Player\'s balance increases by $200.', () => {
		let p1 = new Player(Player.P_CAR, 36);
		p1.advance(10);
		expect(p1).to.have.property('balance', 200);
	});

	it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
		let p1 = new Player(Player.P_CAR);
		p1.advance(10);
		expect(p1).to.have.property('balance', 0);
	});

	it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
		let p1 = new Player(Player.P_CAR);
		p1.advance(100);
		expect(p1).to.have.property('balance', 400);
	});
});
