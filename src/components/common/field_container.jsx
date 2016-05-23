// props:
//    field - optional - redux-form field
//    label - optional - text for field label
//    customClassName - optional - custom class name for container

import React, { Component } from 'react';

require('../../stylesheets/common/field_container.scss');

export default class FieldContainer extends Component {

  fieldHasError() {
    return this.props.field && this.props.field.touched && this.props.field.invalid;
  }

  getFieldContainerClass(baseClassName) {
    return `${baseClassName}${ this.fieldHasError() ? ' has-error' : '' }`;
  }

  getFieldError() {
    return this.fieldHasError() ? this.props.field.error : "";
  }

  render() {

    return (
      <div className={ this.getFieldContainerClass('field-container ' + (this.props.customClassName || "")) }>
        <div className="field-label"><span>{ this.props.label ? `${this.props.label}:` : "" }</span></div>
        <div className="field-wrapper">
          { this.props.children }
          <div className="field-error-details">{ this.getFieldError() }</div>
        </div>
        <span className="clear">&nbsp;</span>
      </div>
    );

  }

}
