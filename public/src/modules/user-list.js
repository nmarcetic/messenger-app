var React = require('react');
var App = require('./../index');

module.exports = React.createClass({

  logout() {
    App.client.logout().then(() => window.location.href = 'pages/login.html')
  },

  render() {
    const users = this.props.users;
    // A placeholder image if the user does not have one
    const PLACEHOLDER = 'https://placeimg.com/60/60/people'
    // An anonymous user if the message does not have that information
    const dummyUser = {
      avatar: PLACEHOLDER,
      email: 'Anonymous'
    };



    return <aside className="sidebar col col-3 flex flex-column flex-space-between">
      <header className="flex flex-row flex-center">
      <a href="#" className="logout button button-primary pull-right" onClick={this.logout}>Sign Out</a>
        <h4 className="font-300 text-center">
          <span className="font-600 online-count text-left">{users.length}</span> users online
        </h4>
        <hr/>
      </header>

      <ul className="flex flex-column flex-1 list-unstyled user-list">
        {users.map(user =>
          <li key={user.email}>
          <div className="dropdown">
            <a className="dropdown-toggle" id="dropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  src={user.avatar || dummyUser.avatar} className="avatar img-circle" />
              <span className="absolute username">{user.email}</span>
              <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
            </ul>
          </div>
          </li>
        )}
      </ul>
    </aside>;
  }
});
