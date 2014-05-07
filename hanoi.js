(function (root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});
	
  var readline = require('readline');
  var READER = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
	 
	var Game = Hanoi.Game = function () {
		this.towers = [[3,2,1],[],[]];
	};
	
	Game.prototype.move = function(from, to) {
		var fromTower = this.towers[from];
		var toTower = this.towers[to];
		if ((fromTower[fromTower.length - 1 ] < toTower[toTower.length - 1]) ||
			toTower.length === 0) {
			this.towers[to].push(this.towers[from].pop());
		} else {
			console.log("Invalid move");
		}
		console.log(this.towers);
	}

	Game.prototype.winner = function() {
		var winning = true;
		var tower = this.towers[2];
		var winner = [3,2,1];
		for (var i = 0; i < 3; i++) {
			if (tower[i] !== winner[i]) {
				winning = false;
			}
		}
		return winning;
	}

	Game.prototype.getMove = function() {
		// if (this.towers[2] === [3,2,1]) {
		// 	callback;
		// }
		
		if (this.winner()) {
			console.log(this.towers);
			console.log("You rock!");
			READER.close();
			return;
		}
		
		var game = this;
		console.log(this.towers);
		READER.question("Move from?", function(element1) { 
			READER.question("Move to?", function(element2) {
				game.move(element1-1, element2-1);
				game.getMove();
			})
		})

	}

	Game.prototype.run = function () {
		console.log(this.towers);
		this.getMove();

	}
})(this);

var what = new this.Hanoi.Game();
what.run();