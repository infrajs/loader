Event.handler('Infrajs.oninit', function () {
	//loader
	infra.loader.show();
});

Event.handler('Infrajs.onshow', function () {
	//loader
	infra.loader.hide();
}, 'loader');