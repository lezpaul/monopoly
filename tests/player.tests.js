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
