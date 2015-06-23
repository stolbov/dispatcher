var React = require('react');
var _ = require('lodash');

var moduleList = require('../../modules_folder/index');

var AppActions = require('../../src/js/app-actions');
var AppStore = require('../../src/js/app-store');

var Kernel = React.createClass({

	componentDidMount: function () {
		AppActions.setGlobalData("openedPanel", false);
	},

	render: function () {

		var moduleUi = [];
		_.forEach(moduleList, function (module) {
			module = require('../../modules_folder/' + module + '/index');
			if (module.ui) {
				moduleUi.push(module.ui);
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
			<div>
				<h1>
					Dispatcher
				</h1>
				{ modulesHTML }
			</div>
		);
	}

});

module.exports = Kernel;
