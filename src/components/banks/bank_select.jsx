import React, { Component } from 'react';
import { connect } from 'react-redux';

class BankSelect extends Component {

  renderOptions() {

    if(this.props.loading) {
      return <option key={ -1 } value="-1">Loading...</option>
    }

    let banks = this.props.items.map(
      bank => <option key={ bank.id } value={ bank.id }>{ bank.name }</option>
    );

    banks.unshift(<option key={ -1 } value="-1">Please Select</option>);
    return banks;
  }


  render() {

    return (
      <select className="field-input" type="text" { ...this.props.field }>
        { this.renderOptions() }
      </select>
    );

  }

}


export default connect(state => state.banks)(BankSelect);