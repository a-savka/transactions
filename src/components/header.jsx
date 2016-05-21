import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authentication.js';

require('../stylesheets/header.scss');

class Header extends Component {

  logout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {

    return(
      <div className="header">
        <ul className="navigation">
          <li>
            <Link to="/">View Transaction</Link>
          </li>
          <li>
            <Link to='/add'>Add Transaction</Link>
          </li>
          <li>
            <a href='/' onClick={ this.logout.bind(this) }>Logout</a>
          </li>
        </ul>
      </div>
    )

  }

}

export default connect(null, { logout })(Header);
