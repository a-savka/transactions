import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { login } from '../actions/authentication';
import FieldContainer from './common/field_container';

require('../stylesheets/login.scss');

class Login extends Component {

  onSubmit(fields) {
    this.props.login(fields);
  }

  render() {

    const {fields: {username, password}, handleSubmit} = this.props;

    return (

      <div className="login-container">
        <div className="login">
          <form className="login-form" onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>

            <span>{ this.props.errorMessage || "Please Login" }</span>

            <FieldContainer label="username" field={ username }>
              <input className="field-input" type="text" { ...username } />
            </FieldContainer>

            <FieldContainer label="password" field={ password }>
              <input className="field-input" type="password" { ...password } />
            </FieldContainer>

            <FieldContainer customClassName="field-container for-controls">
              <button type="submit">Login</button>
            </FieldContainer>

          </form>
        </div>
      </div>
    );
  }

}


function validate(values) {

  let errors = {}

  if(!values.username) {
    errors.username = "Please provide username";
  }

  if(!values.password) {
    errors.password = "Please provide password";
  }

  return errors;
}


export default reduxForm({
  form: "loginForm",
  fields: ["username", "password"],
  validate
}, state => state.authentication, { login })(Login);
