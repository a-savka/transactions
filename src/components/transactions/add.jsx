import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Header from '../header';
import FieldContainer from '../common/field_container';

require('../../stylesheets/transactions/add.scss');

class AddTransaction extends Component {

  onSubmit() {

  }

  render() {

    const { fields: { amount, bankId }, handleSubmit } = this.props;

    return (
      <div>
        <Header />
        <div className="add-transaction content">

          <form className="add-transaction-form" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

            <h3 className="page-head">Add Transaction</h3>

            <FieldContainer label="Amount" field={ amount }>
              <input className="field-input" type="text" { ...amount } />
            </FieldContainer>

            <FieldContainer label="Bank" field={ bankId }>
              <select className="field-input" type="text" { ...bankId }>
                <option value="-1">Loading...</option>
              </select>
            </FieldContainer>


            <FieldContainer customClassName="for-controls">
              <button type="submit">Save Transaction</button>
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
}, null, null)(AddTransaction);
