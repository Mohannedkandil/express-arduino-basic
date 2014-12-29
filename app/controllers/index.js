'use strict';

var led = require('./led-sample');

exports.render = function(req, res) {
    res.render('index.html', {
		pageTitle: 'Index'
	});
};

exports.ledOn = function(req, res) {
	led.turnOn(req.body.color, function() {
		res.json({success: true});
	});
};

exports.ledOff = function(req, res) {
	led.turnOff(req.body.color, function() {
		res.json({success: true});
	});
};
