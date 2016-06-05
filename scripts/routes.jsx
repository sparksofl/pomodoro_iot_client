var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SmallApp = require('./components/SmallApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var TasksPage = require('./components/tasks/TasksPage.react.jsx');
var TaskPage = require('./components/tasks/TaskPage.react.jsx');
var TaskNew = require('./components/tasks/TaskNew.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={SmallApp}>
    <DefaultRoute handler={TasksPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="tasks" path="/tasks" handler={TasksPage}/>
    <Route name="task" path="/tasks/:taskId" handler={TaskPage} />
    <Route name="new-task" path="/task/new" handler={TaskNew}/>
    <Route name="set_current" path="/tasks/:taskId"/>
    <Route name="delete_task" path="/tasks/:taskId"/>
  </Route>
);

