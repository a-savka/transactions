import React, { Component } from 'react';
import Header from '../header';

require('../../stylesheets/transactions/add.scss');

export default class AddTransaction extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="add_transaction content">
          Add Transaction ...
        </div>
      </div>
    );
  }

}
