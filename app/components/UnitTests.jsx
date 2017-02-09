var React = require('react');
var Iframe = require("react-iframe");

{/* <Iframe url="http://www.example.com" [string width, [string height]] /> */}

var UnitTests = React.createClass({

  render: function () {

    return (
      <div>
        <h1 className="page-title">Unit Tests</h1>
        <p>Unit test report comes here.</p>
        <Iframe url="https://github.com/hemmoi/Demopage/tree/master/reports/result.txt">
        </Iframe>
      </div>
    )
  }
});

module.exports = UnitTests;
