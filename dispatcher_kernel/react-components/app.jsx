var React = require('react');
var _ = require('lodash');

var moduleList = require('../../modules_folder/index');

var AppActions = require('../../src/js/app-actions');
var AppStore = require('../../src/js/app-store');

require('../../src/css/app.less');

var Kernel = React.createClass({

	componentDidMount: function () {
    	AppStore.sendMsg("test", "app...");
		AppActions.setGlobalData("openedPanel", false);
	},

	render: function () {

		var moduleUi = [];
		_.forEach(moduleList, function (moduleName) {
			try {
				var module = require('../../modules_folder/' + moduleName + '/view');
				if (module) {
					moduleUi.push(module);
					AppActions.setGlobalData("topPosition", topPos + 200);
				}
			} catch (err) {
				console.log('Module ' + moduleName + ' have no "view.jsx"');
			}
		})

		var modulesHTML = _.map(moduleUi, function (module, key) {
			return React.createElement(
				module,
				{
					key: "module_" + key
				}
			);
		});

		return (
			<div className="main">
				<h1>
					Dispatcher
				</h1>
				{ modulesHTML }
			</div>
		);
	}

});

module.exports = Kernel;
