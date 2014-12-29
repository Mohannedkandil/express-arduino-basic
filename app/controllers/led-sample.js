'use strict';

var five = require("johnny-five");
var board;
var leds = {};

board = new five.Board();

board.on("ready", function() {

    leds.green = new five.Led(11);
    leds.yellow = new five.Led(12);
    leds.red = new five.Led(13);
	
	console.log('Board Ready');
});

exports.turnOn = function(color, callback) {
	if (color === 'red' || color === 'yellow' || color === 'green') {
		leds[color].on();
		console.log('on', color);
	}
	callback(true);
};

exports.turnOff = function(color, callback) {
	if (color === 'red' || color === 'yellow' || color === 'green') {
		leds[color].off();
		console.log('off', color);
	}
	callback(true);
};