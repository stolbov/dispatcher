var React = require('react');

var AppActions = require('../../src/js/app-actions');
var AppStore = require('../../src/js/app-store');

var ModuleName = "firstUI";

module.exports = React.createClass({ 
	
	componentDidMount: function () {
        this.unsubscribe = AppStore.listen(this.handleChange);
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    getInitialState: function () {
    	return {
    		msg: AppStore.getDataByName("mapMsg"),
    		openedPanel: AppStore.getDataByName("openedPanel")
    	};
    },

	render: function () {
		if (this.state.openedPanel !== ModuleName) {
			return (
				<div>
					<div
						onClick={ this.handleChangeView }
						style={{
							display: "inline-block",
							padding: "4px",
							cursor: "pointer",
							border: "1px solid #333"
						}}
					>
						btn 1
					</div>
					<hr />
				</div>
			)
		} else {
			return (
				<div>
					<div>
						<h3>-- ui module view --</h3>
					</div>
					<div
						onClick={ this.handleChangeView }
						style={{
							display: "inline-block",
							padding: "4px",
							cursor: "pointer",
							border: "1px solid #333"
						}}
					>
						hide
					</div>
					<div> map response: { this.state.msg } </div>
					<div
						onClick={ this.handleClick }
						style={{
							display: "inline-block",
							padding: "4px",
							cursor: "pointer",
							border: "1px solid #333"
						}}
					>
						Load data on map
					</div>
					<hr />
				</div>
			);
		}
	},

	handleChange: function (data) {
		if (data.msgChanel == "mapMsg") {
			this.setState({
				msg: data.msgBody
			});
		}
		if (data.changeData = "openedPanel") {
			this.setState({
				openedPanel: data.newData
			});
		}
	},

	handleChangeView: function () {
		var openedPanelName = AppStore.getDataByName("openedPanel"); 
		if (this.state.openedPanelName == ModuleName) {
			AppActions.setGlobalData("openedPanel", false);
		} else {
			AppActions.setGlobalData("openedPanel", ModuleName);
		}
	},

	handleClick: function () {
		AppActions.setGlobalData("msg", "loading data from module...");
	}

});
