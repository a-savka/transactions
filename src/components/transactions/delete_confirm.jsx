import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalConfirm from '../common/modal_confirm';
import { transactionsDelete, transactionsDeleteModalHide } from '../../actions/transactions';


class DeleteConfirm extends Component {

  render() {

    if(!this.props.deleteItem) {
      return null;
    }

    const tran = this.props.deleteItem;

    return(
      <ModalConfirm
        text={ `A you sure to delete this transaction with amount of ${ tran.amount.toFixed(2) }? ` }
        onConfirmed={ () => this.props.onConfirmed(tran) }
        onClosed={ () => this.props.onClosed() }
        />
    )

  }

}


function mapStateToProps(state) {
  return {
    deleteItem: state.transactions.deleteItem
  };
}

export default connect(mapStateToProps, {
  onConfirmed: transactionsDelete,
  onClosed: transactionsDeleteModalHide
})(DeleteConfirm);
