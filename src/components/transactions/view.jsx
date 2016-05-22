import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';

require('../../stylesheets/transactions/view.scss');

class ViewTransactions extends Component {


  renderDataRows() {
    let rows = this.props.transactions.items.map( transaction => (
      <tr key={ transaction.id }>
        <td>{ transaction.id }</td>
        <td>{ transaction.amount }</td>
        <td>{ transaction.bankId }</td>
        <td>
          <button type="button">Delete</button>
        </td>
      </tr>
    ));
    return rows;
  }


  renderDataTable() {

    if(this.props.transactions.loading || this.props.banks.loading) {
      return <span>Loading, please wait...</span>
    }

    return (

      <table>

        <thead>
          <tr>
            <th width="10%">ID</th>
            <th width="35%">Amount</th>
            <th width="45%">Bank</th>
            <th width="10%"></th>
          </tr>
        </thead>

        <tbody>
          { this.renderDataRows() }
        </tbody>

      </table>

    );
  }


  render() {

    return (

      <div>
        <Header />
        <div className="view-transactions content">
          <h3 className="page-head">View Transaction</h3>

          { this.renderDataTable() }

        </div>
      </div>

    );
  }

}


function mapStateToProps({ transactions, banks }) {
  console.log(transactions);
  return {
    transactions,
    banks
  }
}


export default connect(mapStateToProps)(ViewTransactions);
