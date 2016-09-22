var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
  renderMessage(message, i) {
    // A placeholder image if the user does not have one
    const PLACEHOLDER = 'https://placeimg.com/60/60/people'
    // An anonymous user if the message does not have that information
    var dummyUser = {
      avatar: PLACEHOLDER,
      email: 'Anonymous'
    }

    const sender = typeof message.sentBy === 'object' ? message.sentBy : dummyUser

    return (
      <div className="panel-body" key={i}>
                    <ul className="chat">
                        <li className="left clearfix">
                          <span className="chat-img pull-left">
                              <img src={sender.avatar || dummyUser.avatar} alt={sender.email} className="img-circle" />
                          </span>
                            <div className="chat-body clearfix">
                                <div className="header">
                                    <strong className="primary-font">{sender.email}</strong> <small className="pull-right text-muted">
                                        <span className="glyphicon glyphicon-time"></span>{moment(message.createdAt).format('MMM Do, hh:mm:ss')}</small>
                                </div>
                                <p>
                                  {message.text}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
    )
  },
  render() {
    return (
      <main className="chat flex flex-column flex-1 clear">
        {this.props.messages.map(this.renderMessage)}
      </main>
    )
  }
})
