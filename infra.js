Event.handler('Controller.oninit', function () {
	//loader
	Loader.show();
}, 'loader');

Event.handler('Controller.onshow', function () {
	//loader
	Loader.hide();
}, 'loader');