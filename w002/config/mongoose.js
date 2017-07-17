var config = require('./env/development'), 
	mongoose = require('mongoose'); 

module.exports = function() { 
	// Use native promises
	mongoose.Promise = global.Promise;
	var db = mongoose.connect(config.db); 

	require('../app/models/user.server.model'); 

	return db; 
}; 
