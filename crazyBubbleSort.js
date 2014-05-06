var readline = require('readline');
var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askLessThan(el1, el2, callback) {
	READER.question("Is " + el1 + " less than " + el2 + "?", function(element) {
		var lessThan = element;
		if (lessThan === "yes") {
			callback(true);
		} else {
			callback(false);
		}
	})
}


function performSortPass(arr, i, madeAnySwaps, callback) {
		console.log(arr);

	if (i === arr.length - 1) {
		console.log("end of array, time for callback");
		callback(madeAnySwaps);
	}
	
	if (i < arr.length - 1) {
		askLessThan(arr[i+1], arr[i], function(lessThan) {
			if (lessThan) {
				var tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				madeAnySwaps = true;
				
			}
			performSortPass(arr, i+1, madeAnySwaps, callback);
		});
	}
}

function crazyBubblesort(arr, sortCompletionCallback) {

	function sortPassCallback(madeAnySwaps) {

		if (madeAnySwaps) {
			performSortPass(arr, 0, false, sortPassCallback);
		} else {
			sortCompletionCallback(arr);	
			READER.close();
		}
	}
	
	sortPassCallback(true);
}

crazyBubblesort([3, 2, 1], function (arr) { console.log(arr) });

