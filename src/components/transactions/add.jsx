import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Header from '../header';
import { transactionsAdd } from '../../actions/transactions';
import FieldContainer from '../common/field_container';
import BankSelect from '../banks/bank_select';

require('../../stylesheets/transactions/add.scss');

class AddTransaction extends Component {

  onSubmit(fields) {
    this.props.transactionsAdd(fields);
  }

  isDisabled() {
   return this.props.loading;
  }

  getSubmitButtonIcon() {
    return this.isDisabled() ? "fa fa-spin fa-spinner" : "fa fa-check";
  }

  render() {

    const { fields: { amount, bankId }, handleSubmit } = this.props;

    return (
      <div>
        <div className="add-transaction content">

          <form className="add-transaction-form" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

            <h3 className="page-head">Add Transaction</h3>

            <If condition={ !!this.props.errorMessage }>
              <FieldContainer>
                <span>{ this.props.errorMessage }</span>
              </FieldContainer>
            </If>

            <FieldContainer label="Amount" field={ amount }>
              <input disabled={ this.isDisabled() } className="field-input" type="text" { ...amount } />
            </FieldContainer>

            <FieldContainer label="Bank" field={ bankId }>
              <BankSelect disabled={ this.isDisabled() } field={ bankId } />
            </FieldContainer>

            <FieldContainer customClassName="for-controls">
              <button disabled={ this.isDisabled() } type="submit"><i className={ this.getSubmitButtonIcon() }></i>&nbsp;Save Transaction</button>
            </FieldContainer>

          </form>

        </div>
      </div>
    );

  }

}


function validate(values) {

  let errors = {};

  if(!values.amount) {
    errors.amount = "Please provide amount";
  }
  else if(!(/^[\-+]?\d+\.?\d*$/.test(values.amount))) {
    errors.amount = "Must be a number";
  }

  if(!values.bankId || values.bankId == -1) {
    errors.bankId = "Please specify bank";
  }

  return errors;

}

export default reduxForm({
  form: "addTransactionForm",
  fields: ["amount", "bankId"],
  validate
}, state => state.transactions, {transactionsAdd} )(AddTransaction);
