var request = require('request');
var config = require('../config.js');
var qs = require('querystring');
var timeStamp = function() {
	return(new Date().toString()+"\t");
};

var printError = function(error) {
	console.error(timeStamp()+"Error while hitting the service:", error);
};

var _get = function(callback) {
	request.get(this.options, function(err, res, body) {
		if(err){
			printError(err);
			callback(err);
		}
		else callback(null, JSON.parse(body));
	});
};

var _post = function(data, callback) {
	this.options.form = qs.stringify(data);
	request.post(this.options, function(err, res, body){
		if(err){
			printError(err);
			callback(err);
		}
		else callback(null, JSON.parse(body));
	});
};

var _delete = function(callback) {
	request.del(this.options, function(err, res, body) {
		if(err){
			printError(err);
			callback(err);
		}
		else callback(null, JSON.parse(body));
	});
}

var _withQueryParams = function(params) {
	this.options.url += "?"+qs.stringify(params);
};

var Service = function(path, username, password) {
	this.options = {
		url: config.service.host+':'+config.service.port+ path,
		headers: {
			'Authorization': "Basic " + new Buffer(username + ":" + password).toString("base64")
		}
	}
};

Service.prototype = {
	withQueryParams: _withQueryParams,
	get: _get,
	post: _post,
	'delete': _delete
};
module.exports = Service;
