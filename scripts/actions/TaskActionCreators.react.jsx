var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;

module.exports = {

  loadTasks: function() {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TASKS
    });
    WebAPIUtils.loadTasks();
  },

  loadTask: function(taskId) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.LOAD_TASK,
      taskId: taskId
    });
    WebAPIUtils.loadTask(taskId);
  },

  createTask: function(name, estimate, tags) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.CREATE_TASK,
      name: name,
      estimate: estimate,
      tags: tags
    });
    WebAPIUtils.createTask(name, estimate, tags);
  },

  updateTask: function(taskId) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.SET_CURRENT_TASK,
      taskId: taskId
    });
    WebAPIUtils.updateTask(taskId);
  },

 deleteTask: function(taskId) {
    SmallAppDispatcher.handleViewAction({
      type: ActionTypes.DELETE_TASK,
      taskId: taskId
    });
    WebAPIUtils.deleteTask(taskId);
  }


};

