var SmallAppDispatcher = require('../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../constants/SmallConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = SmallConstants.ActionTypes;
var CHANGE_EVENT = 'change';

// Load an access token from the session storage, you might want to implement
// a 'remember me' using localSgorage
var _accessToken = sessionStorage.getItem('accessToken');
var _email = sessionStorage.getItem('email');
var _timer_token = sessionStorage.getItem('timer_token');
var _errors = [];

var SessionStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  isLoggedIn: function() {
    return _accessToken ? true : false;
  },

  getAccessToken: function() {
    return _accessToken;
  },

  getEmail: function() {
    return _email;
  },

  getTimerToken: function() {
    return _timer_token;
  },

  getErrors: function() {
    return _errors;
  }

});

SessionStore.dispatchToken = SmallAppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.LOGIN_RESPONSE:
      if (action.json && action.json.access_token) {
        _accessToken = action.json.access_token;
        _email = action.json.email;
        _timer_token = action.json.timer_token;
        // Token will always live in the session, so that the API can grab it with no hassle
        sessionStorage.setItem('accessToken', _accessToken);
        sessionStorage.setItem('email', _email);
        sessionStorage.setItem('timer_token', _timer_token);
      }
      if (action.errors) {
        _errors = action.errors;
      }
      SessionStore.emitChange();
      break;

    case ActionTypes.LOGOUT:
      _accessToken = null;
      _email = null;
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('timer_token');
      SessionStore.emitChange();
      break;

    default:
  }

  return true;
});

module.exports = SessionStore;

