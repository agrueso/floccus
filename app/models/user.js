var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	text : String,
	done : Boolean
});