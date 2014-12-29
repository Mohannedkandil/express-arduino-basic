$(function() {

    function postWrapper(url, returnFunction, postData, passData) {
        $.ajax({
            url: url,
            cache: false,
            type: 'POST',
            dataType: 'json',
            data: postData,
            success: function(data) {
                returnFunction(false, data, passData);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var data = { error: true, jqXHR: jqXHR, textStatus: textStatus, errorThrown: errorThrown };
                returnFunction(true, data, passData);
            }
        });
    };

    function getWrapper(url, returnFunction, passData, encType) {
        $.ajax({
            url: url,
            cache: false,
            type: 'GET',
            dataType: encType,
            success: function(data) {
                returnFunction(false, data, passData);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                var data = { error: true, jqXHR: jqXHR, textStatus: textStatus, errorThrown: errorThrown };
                returnFunction(true, data, passData);
            }
        });
    };
	
	function returnLed(err, data, passData) {
		if (err) {
			console.log('Error');
			return false;
		} 
		console.log(passData);
	}
	
	$('.turn-on').on('click', function() {
		var ledColor = $(this).data('color'),
			data = {
				color: ledColor
			};
		
		postWrapper('/led/on', returnLed, data, ledColor + ' LED turned on');
	});
	
	$('.turn-off').on('click', function() {
		var ledColor = $(this).data('color'),
			data = {
				color: ledColor
			};
		
		postWrapper('/led/off', returnLed, data, ledColor + ' LED turned off');
	});
});
