var _ = require('lodash');
var moduleList = require('./modules_folder/index');

module.exports = function (app) {

	var setRoute = function(route) {
		return app.use(route.url, route.router);
	};

	_.forEach(moduleList, function (moduleName) {
		try {
			setRoute(require('./modules_folder/' + moduleName + '/route'));
		} catch (err) {
			// console.log(err);
		}
	});

	app.use('/', function (req, res) {
	    res.render('index');
	});

}
