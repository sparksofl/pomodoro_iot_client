var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

module.exports = {

  APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
    REGISTRATION:   APIRoot + "/v1/users",
    TASKS:          APIRoot + "/v1/tasks"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    // Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    // Routes
    REDIRECT: null,

    LOAD_TASKS : null,
    RECEIVE_TASKS: null,
    LOAD_TASK: null,
    RECEIVE_TASK : null,
    CREATE_TASK: null,
    RECEIVE_CREATED_TASK : null,
    SET_CURRENT_TASK: null
  })

};
