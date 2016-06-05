var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _tasks = [];
var _errors = [];
var _task = { name: "", user: { username: "" }, user_id: "" };

var TaskStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllTasks: function() {
    return _tasks;
  },

  getTask: function() {
    return _task;
  },

  getErrors: function() {
    return _errors;
  }

});

TaskStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_TASKS:
      _tasks = action.json.tasks;
      TaskStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CREATED_TASK:
      if (action.json) {
        _tasks.unshift(action.json.task);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      TaskStore.emitChange();
      break;

    case ActionTypes.RECEIVE_TASK:
      if (action.json) {
        _task = action.json.task;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      TaskStore.emitChange();
      break;

    case ActionTypes.SET_CURRENT_TASK:
      if (action.json) {
        _task = action.json.task;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      TaskStore.emitChange();
      break;
  }

  return true;
});

module.exports = TaskStore;

