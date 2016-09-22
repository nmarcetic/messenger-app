var React = require('react');
var ReactDOM = require('react-dom');
var ChatMessage = require('./message');
var UserList = require('./user-list');
var MessageList = require('./message-list');
var ComposeMessage = require('./message-compose');
var App = require('./../index');

module.exports = React.createClass({

  getInitialState() {
    return {
      users: [],
      messages: []
    }
  },

  componentDidMount() {
    const userService = App.client.service('users')
    const messageService = App.client.service('messages')

    // Find all users initially
    userService.find().then(page => this.setState({ users: page.data }))
    //Listen to new users so we can show them in real-time
    userService.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }))

    // Find the last 10 messages
    messageService.find({
      query: {
        $sort: { createdAt: 1 },
        $limit: this.props.limit || 10
      }
    }).then(page => this.setState({ messages: page.data }))
    // Scroll to bottom, last msg view
    const node = ReactDOM.findDOMNode(this).querySelector('.msg-list')
    node.scrollTop = node.scrollHeight - node.clientHeight

    // Listen to newly created messages
    messageService.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }))
  },

  componentDidUpdate: function() {
    // Scroll to last msg on component update
    const node = ReactDOM.findDOMNode(this).querySelector('.msg-list')
    node.scrollTop = node.scrollHeight - node.clientHeight
  },

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 user-list">
          <UserList users={this.state.users} />
        </div>
        <div className="col-sm-8 msg-list">
          <MessageList users={this.state.users} messages={this.state.messages} />
        </div>
        <div className="row">
        <div className="col-sm-8 col-sm-offset-4">
          <ComposeMessage />
        </div>
        </div>
      </div>
    )
  }

});
