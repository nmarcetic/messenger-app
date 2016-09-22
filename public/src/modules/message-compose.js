var React = require('react');
var App = require('./../index');

module.exports = React.createClass({

getInitialState: function() {
  return {
    text: '',
  };
},

sendMessage: function(ev) {
  ev.preventDefault();
  App.client.service('messages').create(this.state)
    .then(() => this.setState({text: ''}));
},

updateInput: function(ev) {
  this.setState({
    text: ev.target.value
  });
},

render: function() {
  return <div className="col-sm-12">
    <div>{this.state.messages}</div>
    <form onSubmit={this.sendMessage} autoComplete="off">
      <div className="panel-footer">
         <div className="input-group">
            <input onChange={this.updateInput} value={this.state.text} id="btn-input" type="text" autoComplete="off" className="form-control input-sm" placeholder="Type your message here..." required/>
             <span className="input-group-btn">
                 <input type="submit" value="Send" className="btn btn-success btn-sm" />
             </span>
         </div>
         </div>
    </form>
  </div>;
}

});
