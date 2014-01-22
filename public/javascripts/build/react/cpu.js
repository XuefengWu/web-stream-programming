var CpuGauge = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="leavePage">
        <PersonLeaveBox data={this.state.data} />
      </div>
    );
  }
});

React.renderComponent(
  <CpuGauge url="/"/>,
  document.getElementById('cpuGaugeContainer')
);
