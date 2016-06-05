var React = require('react');
var SmallAppDispatcher = require('../../dispatcher/SmallAppDispatcher.js');
var SmallConstants = require('../../constants/SmallConstants.js');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var TaskActionCreators = require('../../actions/TaskActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var TaskNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isLoggedIn()) {
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getDOMNode().value;
    var tags = this.refs.tags.getDOMNode().value;
    TaskActionCreators.createTask(name, tags);
  },

  render: function() {
    return (
      <div className="row form-new">
        <div className="medium-6 medium-centered large-4 large-centered columns">
          <form onSubmit={this._onSubmit} className="new-task">
            <div className="new-task__name">
              <input type="text" placeholder="name" name="name" ref="name" />
            </div>
            <div className="new-task__tags">
              <input type="text" placeholder="tags" tags="tags" ref="tags" />
            </div>
            <div className="new-task__submit">
              <button type="submit">Create</button>
            </div>
           </form>
        </div>
       </div>
     );
  }

});

module.exports = TaskNew;

