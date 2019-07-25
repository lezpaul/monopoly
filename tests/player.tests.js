const expect = require('chai').expect;
const Consts = require('../src/constants');
const Player = require('../src/player').Player;


describe('Player Class Tests - Rel.1 - As a player, I can take a turn so that I can move around the board.', () => {

	it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', () => {
		let p1 = new Player(Consts.Players.P_CAR);
		p1.advance(7);
		expect(p1).to.have.property('position', 7);
	});

	it('Player on location numbered 39, rolls 6, ends up on location 5', () => {
		let p1 = new Player(Consts.Players.P_CAR, 39);
		p1.advance(6);
		expect(p1).to.have.property('position', 5);
	});
});


describe('Player Class Tests - Rel.2 - As a player, when I land on go I get $200 as my salary for staying in the game.', () => {

	it('During a turn a Player lands on Go and their balance increases by $200.', () => {
		let p1 = new Player(Consts.Players.P_CAR, 36);
		p1.advance(4);
		expect(p1).to.have.property('balance', Consts.Board.LAND_ON_GO_REWARD);
	});

	it('During a turn a Player lands on some "normal" location and their balance does not change.', () => {
		let p1 = new Player(Consts.Players.P_CAR, 36);
		p1.advance(3);
		expect(p1).to.have.property('balance', 0);
	});
});


describe('Player Class Tests - Rel.2 - As a player, I receive $200 when I pass over Go.', () => {

	it('Player starts before Go near the end of the Board, rolls enough to pass Go. The Player\'s balance increases by $200.', () => {
		let p1 = new Player(Consts.Players.P_CAR, 36);
		p1.advance(10);
		expect(p1).to.have.property('balance', Consts.Board.LAND_ON_GO_REWARD);
	});

	it('Player starts on Go, takes a turn where the Player does not additionally land on or pass over Go. Their balance remains unchanged.', () => {
		let p1 = new Player(Consts.Players.P_CAR);
		p1.advance(10);
		expect(p1).to.have.property('balance', 0);
	});

	it('Player passes go twice during a turn. Their balance increases by $200 each time for a total change of $400.', () => {
		let p1 = new Player(Consts.Players.P_CAR);
		p1.advance(100);
		expect(p1).to.have.property('balance', 2 * Consts.Board.LAND_ON_GO_REWARD);
	});
});


describe('Player Class Tests - Rel.2 - As a Player, when I land on Go To Jail during a turn I move directly to Just Visiting.', () => {

	it('Player starts before Go To Jail, lands on Go To Jail, ends up on Just Visiting and their balance is unchanged.', () => {
		let p1 = new Player(Consts.Players.Player_CAR, Consts.Board.POS_GO_TO_JAIL - 5);
		p1.advance(5);
		expect(p1).to.have.property('position', Consts.Board.POS_JUST_VISITING);
		expect(p1).to.have.property('balance', 0);
	});

	it('Player starts before Go To Jail, rolls enough to pass over Go To Jail but not enough to land on or pass over go. Their balance is unchanged and they end up where the should based on what they rolled.', () => {
		let p1 = new Player(Consts.Players.Player_CAR, Consts.Board.POS_GO_TO_JAIL - 5);
		p1.advance(9);
		expect(p1).to.have.property('position', Consts.Board.POS_GO_TO_JAIL - 5 + 9);
		expect(p1).to.have.property('balance', 0);
	});
});


describe('Player Class Tests - Rel.2 - As a Player, landing on Income Tax forces me to pay the smaller of 10% of my total worth or $200.', () => {
	/* TODO
	During a turn, a Player with an initial total worth of $1800 lands on Income Tax. The balance decreases by $180.
	During a turn, a Player with an initial total worth of $2200 lands on Income Tax. The balance decreases by $200.
	During a turn, a Player with an initial total worth of $0 lands on Income Tax. The balance decreases by $0.
	During a turn, a Player with an initial total worth of $2000 lands on Income Tax. The balance decreases by $200.
	During a turn, a Player passes over Income Tax. Nothing happens.
	*/
});


describe('Player Class Tests - Rel.2 - As a Player, when I land on Luxury Tax, I pay $75.', () => {
	/* TODO
	Player takes a turn and lands on Luxury tax. Their balance decreases by $75.
	Player passes Luxury Tax during a turn. Their balance is unchanged.
	*/
});
