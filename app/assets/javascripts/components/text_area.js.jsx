var TextArea = React.createClass({
  render: function() {
    return (
      <textarea className="main-textarea" value={this.value}>
      </textarea>
    );
  }
});

var ConfigButton = React.createClass({
  render: function() {
    return (
      <div className="config-button">
        <i className="fa fa-wrench fa-lg"></i>
      </div>
    )
  }
})