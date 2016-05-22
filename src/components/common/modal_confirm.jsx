import React, { Component } from 'react';

require('../../stylesheets/common/modal_confirm.scss');

export default class ModalConfirm extends Component {


  render() {

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={ this.props.onClosed }>×</span>
            <h3>Please Confirm</h3>
          </div>
          <div className="modal-body">
            <p>{ this.props.text }</p>
          </div>
          <div className="modal-footer">
            <button onClick={ this.props.onConfirmed }><i className="fa fa-check"></i>&nbsp;Yes</button>
            <button onClick={ this.props.onClosed }><i className="fa fa-close"></i>&nbsp;No</button>
          </div>
        </div>
      </div>
    );

  }


}
