var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/Countdown" activeClassName="active">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu">
            Created by: <a href="https://github.com/ricardolopezg" target="_blank">Ricardo Lopez</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
