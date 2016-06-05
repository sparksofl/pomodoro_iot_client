var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  receiveLogin: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.LOGIN_RESPONSE,
      json: json,
      errors: errors
    });
  },

  receiveTasks: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TASKS,
      json: json
    });
  },

  receiveTask: function(json) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_TASK,
      json: json
    });
  },

  receiveCreatedTask: function(json, errors) {
    SmallAppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_CREATED_TASK,
      json: json,
      errors: errors
    });
  }

};

