var React = require('react');

var AppActions = require('../../src/js/app-actions');
var AppStore = require('../../src/js/app-store');

var EmptyMsg = "no data";

module.exports = React.createClass({    
	
	componentDidMount: function () {
        this.unsubscribe = AppStore.listen(this.handleChange);
    },

    componentWillUnmount: function () {
        this.unsubscribe();
    },

    getInitialState: function () {
    	return {
    		msg: AppStore.getDataByName("msg") || EmptyMsg
    	};
    },

	render: function () {
		return (
			<div>
				<div> 
					<h3>-- map module view --</h3>
				</div>
				<div>MSG: "{ this.state.msg }"</div>
				<div
					onClick={ this.handleClick }
					style={{
						display: "inline-block",
						padding: "4px",
						cursor: "pointer",
						border: "1px solid #333"
					}}
				>
					Delete data from map
				</div>
				<hr />
			</div>
		);
	},

	handleChange: function (data) {
		var _this = this;
		if (data.changeData &&
		data.changeData == "msg") {
			_this.setState({
				msg: AppStore.getDataByName("msg")
			});
			setTimeout( function (){
				_this.setState({
					msg: "data load - OK"
				});
				AppActions.sendMsg("mapMsg", "map has add data!");
			}, 2500);
		}
	},

	handleClick: function () {
		if (this.state.msg !== EmptyMsg) {
			AppActions.unsetGlobalData('msg');
			this.setState({
				msg: EmptyMsg
			});
			AppActions.sendMsg("mapMsg", "map has unmount data!");
		}
	}

});
