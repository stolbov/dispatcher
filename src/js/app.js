// require('../styles/app.less');

var React = require('react');
var _ = require('lodash');

var App = require('../../dispatcher_kernel/react-components/app.jsx');
var moduleList = require('../../modules_folder/index');

// _.forEach(moduleList, function (moduleName) {
// 	var module = require('../../modules_folder/' + moduleName + '/index');
// });

React.render(
    // React.createElement(App, {modules: moduleUi}),
    React.createElement(App),
    document.getElementById('app')
);
