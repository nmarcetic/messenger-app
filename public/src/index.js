var ReactDOM = require('react-dom');
var React = require('react');
var socket = require('socket.io-client')();
var feathers = require('feathers-client');

var ChatApp = require('./modules/chat');

var client = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      // config auth storage
      .configure(feathers.authentication({
        storage: window.localStorage
      }));

module.exports.client = client;

// Init the app if user is authenticated
client.authenticate().then(() => {
  ReactDOM.render(<div className="flex flex-column">
    <header className="title-bar flex flex-row flex-center">
      <div className="title-wrapper block center-element">
        <h3 className="title text-center">Messenger App</h3>
      </div>
    </header>
    <ChatApp />
  </div>, document.getElementById("app"));
}).catch(error => {
  if(error.code === 401) {
    window.location.href = 'pages/login.html'
  }

  console.error(error);
});
