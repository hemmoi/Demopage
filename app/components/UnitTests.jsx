var React = require('react');
var Iframe = require("react-iframe");

{/* <Iframe url="http://www.example.com" [string width, [string height]] /> */}

var UnitTests = React.createClass({

  render: function () {

    return (
      <div>
        <p>Unit test report comes here.</p>
          <div className="report">
            <Iframe url="https://s3.eu-west-2.amazonaws.com/demoreports/result.txt"/>
          </div>
      </div>
    )
  }
});

module.exports = UnitTests;
