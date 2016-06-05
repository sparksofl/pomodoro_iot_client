var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var TaskStore = require('../../stores/TaskStore.react.jsx');
var TaskActionCreators = require('../../actions/TaskActionCreators.react.jsx');
var State = require('react-router').State;

var TaskPage = React.createClass({

  mixins: [ State ],

  getInitialState: function() {
    return {
      task: TaskStore.getTask(),
      errors: []
    };
  },

  componentDidMount: function() {
    TaskStore.addChangeListener(this._onChange);
    TaskActionCreators.loadTask(this.getParams().taskId);
  },

  componentWillUnmount: function() {
    TaskStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      task: TaskStore.getTask(),
      errors: TaskStore.getErrors()
    });
  },

  render: function() {
    return (
      <div className="row">
        <div className="task__name">{this.state.task.name}</div>
      </div>
     );
  }

});

module.exports = TaskPage;

