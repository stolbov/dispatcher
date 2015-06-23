var Reflux = require('reflux');

var UiActions = require('./app-actions');

var _appData = {};

module.exports = Reflux.createStore({
    listenables: UiActions,

    init: function () {
    },

    getDataByName: function (name) {
        if (_appData[name]) {
            return _appData[name];
        } else {
            return undefined;
        }
    },

    onSetGlobalData: function (dataObjName, dataObj) {
        _appData[dataObjName] = dataObj;
        this.trigger({
            changeData: dataObjName,
            newData: dataObj
        });
    },

    onUnsetGlobalData: function (dataObjName) {
        if (_appData[dataObjName] !== undefined) {
            delete _appData[dataObjName];
        }
    },

    onSendMsg: function (msgChanel, msgBody) {
        this.trigger({
            msgChanel: msgChanel,
            msgBody: msgBody
        });
    }
});
