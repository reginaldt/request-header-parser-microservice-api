'use strict';

function req_header_parser() {

	this.getData = function (req, res) {
		var os, language, ipAdd, returnData;
		var regExpParenthesis = /\(([^)]+)\)/;
		var matches = regExpParenthesis.exec(req.headers['user-agent']);	
		os = matches[1];

		language = req.headers['accept-language'].split(',')[0];

		ipAdd = req.headers['x-forwarded-for'] || 
	    req.connection.remoteAddress || 
	    req.socket.remoteAddress ||
	    req.connection.socket.remoteAddress;

		returnData = {
			"ipaddress" : ipAdd,
			"language" : language,
			"software" : os
		}

		res.send(returnData);
	};
		


}

module.exports = req_header_parser;
