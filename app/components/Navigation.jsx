var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Demo Application
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Information</IndexLink>
            </li>
            <li>
              <IndexLink to="/countdown" activeClassName="active-link">Countdown</IndexLink>
            </li>
            <li>
              <IndexLink to="/unit" activeClassName="active-link">Unit Tests</IndexLink>
            </li>
            <li>
              <IndexLink to="/robot" activeClassName="active-link">Robot Framework</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="" target="_blank"> Kimmo </a>
            </li>
          </ul>
        </div>
      </div>
    );
};



module.exports = Navigation;
