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
            <Link to="/"><i className="fa fa-list"></i>&nbsp;View Transaction</Link>
          </li>
          <li>
            <Link to='/add'><i className="fa fa-plus"></i>&nbsp;Add Transaction</Link>
          </li>
          <li>
            <a href='/' onClick={ this.logout.bind(this) }><i className="fa fa-sign-out"></i>&nbsp;Logout</a>
          </li>
        </ul>
      </div>
    );

  }

}

export default connect(null, { logout })(Header);
