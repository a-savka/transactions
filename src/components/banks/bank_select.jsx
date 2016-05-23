import React, { Component } from 'react';
import { connect } from 'react-redux';

class BankSelect extends Component {

  render() {

    return (
      <select disabled={ this.props.disabled } className="field-input" { ...this.props.field }>

        <Choose>

          <When condition={ this.props.loading }>
            <option key={ -1 } value="-1">Loading...</option>
          </When>

          <Otherwise>
            <option key={ -1 } value="-1">Please Select</option>
            <For each="bank" of={ [...this.props.items.values()] }>
              <option key={ bank.id } value={ bank.id }>{ bank.name }</option>
            </For>
          </Otherwise>

        </Choose>

      </select>
    );

  }

}

export default connect(state => state.banks)(BankSelect);
