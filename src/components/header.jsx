import React, { Component } from 'react';
import { Link } from 'react-router';

require('../stylesheets/header.scss');

export default class Header extends Component {

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
          <li><a href='/'>Logout</a></li>
        </ul>
      </div>
    )

  }

}
