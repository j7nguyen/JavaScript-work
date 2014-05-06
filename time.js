var startTime = new Date() ;

function Clock(time) {
	this.hour = time.getHours();
	this.minutes = time.getMinutes();
	this.seconds = time.getSeconds();
	}

Clock.prototype.run = function () {
	var clock = this;
	console.log(clock.hour + ":" + clock.minutes + ":" + clock.seconds);
	setInterval(function () {
		clock.seconds += 5;

		if (clock.seconds >= 60 ) {
			clock.seconds -= 60;
			clock.minutes += 1;
		}
		if (clock.minutes >= 60) {
			clock.minutes -= 60;
			clock.hour += 1
		}
		if (clock.hour >= 24) {
			clock.hour -= 24;
		}

	console.log(clock.hour + ":" + clock.minutes + ":" + clock.seconds);
	}, 5000)
}

var daClock = new Clock(startTime);
daClock.run();