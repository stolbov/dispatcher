var _ = require('lodash');
var moduleList = require('./modules_folder/index');

module.exports = function (app) {

	_.forEach(moduleList, function (moduleName) {
		try {
			var includeModule = require('./modules_folder/' + moduleName + '/route');
		} catch (err) {
			// console.log(err);
		}
		
		if (includeModule) {
			app.use(includeModule.url, includeModule.router);
		}
	});

	app.use('/', function (req, res) {
	    res.render('index');
	});

}
