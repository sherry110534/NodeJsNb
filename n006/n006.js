var stdio = require('stdio');
stdio.readByLines(function lineHandler(line, index) {
    // You can do whatever you want with every line 
	console.log('Line %d:', index, line);
	}, function (err) {
	console.log('Finished');
});
