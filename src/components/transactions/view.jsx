import React, { Component } from 'react';
import Header from '../header';

require('../../stylesheets/transactions/view.scss');

export default class ViewTransactions extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="view_transactions content">
          View Transactions ...
        </div>
      </div>
    );
  }

}
