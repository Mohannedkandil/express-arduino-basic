'use strict';

module.exports = function(app) {

    var index = require('../controllers/index');

    app.route('/')
        .get(index.render);
	
	app.route('/led/on')
		.post(index.ledOn);
	
	app.route('/led/off')
		.post(index.ledOff);

};
