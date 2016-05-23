import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import DeleteConfirm from './delete_confirm';
import { transactionsDeleteModalShow } from '../../actions/transactions';

require('../../stylesheets/transactions/view.scss');

class ViewTransactions extends Component {

  render() {

    return (

      <div>
        <Header />
        <div className="view-transactions content">
          <h3 className="page-head">View Transactions</h3>


          <Choose>

            <When condition={ this.props.transactions.loading || this.props.banks.loading }>
              <span className="loading">Loading, please wait...</span>
            </When>

            <Otherwise>
              <table>

                <thead>
                  <tr>
                    <th width="10%">ID</th>
                    <th width="35%">Amount</th>
                    <th width="50%">Bank</th>
                    <th width="5%"></th>
                  </tr>
                </thead>

                <tbody>

                  <For each="transaction" index="index" of={ this.props.transactions.items }>
                    <tr key={ transaction.id }>
                      <td className="numeric">{ transaction.id }</td>
                      <td className="numeric">{ transaction.amount.toFixed(2) }</td>
                      <td>{ this.props.banks.items.get(transaction.bankId).name }</td>
                      <td>
                        <button type="button" onClick={ () => this.props.confirm(transaction) }><i className="fa fa-close"></i></button>
                      </td>
                    </tr>
                  </For>

                </tbody>

              </table>
            </Otherwise>

          </Choose>


        </div>

        <DeleteConfirm />

      </div>

    );
  }

}


function mapStateToProps({ transactions, banks }) {
  return {
    transactions,
    banks
  };
}


export default connect(mapStateToProps, {
  confirm: transactionsDeleteModalShow
})(ViewTransactions);
