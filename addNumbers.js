var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var sum = 0;
var numsLeft = 4



function addNumbers (sum, numsLeft, completionCallback) {
	if (numsLeft === 0 ) {
		completionCallback(sum);
		return;
	} 	
	
	reader.question("Next number to add: ", function (element) {
			var newNum = parseInt(element);
			sum += newNum;
			console.log("Running sum is: " + sum);
			numsLeft -= 1;

			addNumbers (sum, numsLeft, completionCallback);
	})
}

addNumbers(sum, numsLeft, function(sum) {
	console.log("total Sum: " + sum);
	reader.close();
});
// define funciton to get passed in as completioncallback
// call addNumbers, passing in above method
		
