/** @jsx React.DOM */

var Leave = React.createClass({displayName: 'Leave',
  render: function() {
    var leave =  this.props.leave;
    return (
      React.DOM.tr( {className:"leave"}, 
        React.DOM.td(null, leave.name),React.DOM.td(null, leave.employeeId),
        React.DOM.td(null, leave.leaveType),React.DOM.td(null, leave.startDate),
        React.DOM.td(null, leave.endDate),React.DOM.td(null, leave.hours)
      )
    );
  }
});


var LeaveList = React.createClass({displayName: 'LeaveList',
  render: function() {
      var timeCardsNodes = this.props.leaveRecord.timeCards.map(function (leave, index) {
            return Leave( {key:index, leave:leave});
      });
      var jigsawsNodes = this.props.leaveRecord.jigsaws.map(function (leave, index) {
                  return Leave( {key:index, leave:leave});
            });
      return React.DOM.div( {className:"panel"}, React.DOM.div( {className:"row"}, 
                React.DOM.div( {className:"col-md-6"}, React.DOM.table( {className:"table  table-hover"}, timeCardsNodes)),
                React.DOM.div( {className:"col-md-6"}, React.DOM.table( {className:"table  table-hover"}, jigsawsNodes))
             ));
  }
});

var PersonLeaveBox = React.createClass({displayName: 'PersonLeaveBox',
  render: function() {
    var commentNodes = this.props.data.map(function (leaveRecord, index) {
      return LeaveList( {key:index, leaveRecord:leaveRecord});
    });
    return React.DOM.div( {className:"personLeaveBox"}, commentNodes);
  }
});


var LeavePage = React.createClass({displayName: 'LeavePage',
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
      React.DOM.div( {className:"leavePage"}, 
        PersonLeaveBox( {data:this.state.data} )
      )
    );
  }
});

React.renderComponent(
  LeavePage( {url:"/",  pollInterval:2000} ),
  document.getElementById('container')
);
