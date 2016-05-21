import React from 'react';

require('../../stylesheets/common/field_container.scss');

function getFieldContainerClass(field, baseClassName) {
  return `${baseClassName}${ field && field.touched && field.invalid ? ' has-error' : '' }`;
}

function getFieldError(field) {
  return field && field.touched && field.invalid ? field.error : "";
}

export default (props) => {

  return (

    <div className={ getFieldContainerClass(props.field, props.customClassName || "field-container") }>
      <div className="field-label"><span>{ props.label ? `${props.label}:` : "" }</span></div>
      <div className="field-wrapper">
        { props.children }
        <div className="field-error-details">{ getFieldError(props.field) }</div>
      </div>
      <span className="clear">&nbsp;</span>
    </div>

  );

}
