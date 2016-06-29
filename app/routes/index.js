'use strict';

var path = process.cwd();
var reqHeaderParser = require(path + '/app/controllers/request-header-parser.server.js');
module.exports = function (app) {

	var reqHP = new reqHeaderParser();
	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/api/whoami')
	.get(reqHP.getData);

};
