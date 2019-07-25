const Player = require('./player').Player;
const Game = require('./game').Game;


try {
    players = [
        new Player('Horse'),
        new Player('Car'),
        new Player('Tower')
    ];

    console.clear();
    console.log('> Game start!');
    let game = new Game(players);
    console.log('\nPlayers order:');
    game.printPlayers();

    console.log('\n> Let\'s play!');
    for (let i = 0; i < 20; i++) {
        game.play(1);
        console.log(`\nRound n° ${game.rounds}:`);
        game.printPlayers();
    }

    console.log('\n> Game over!');

    console.log(`\nGame Rounds: ${game.rounds}`);
    game.printPlayers();
    console.log();
}
catch (e) {
    console.log('Error occured while executing monopoly.js');
    console.log(e.console);
    console.log(e);
}
