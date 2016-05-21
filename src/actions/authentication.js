import * as types from './types';
import axios from 'axios';

export function login(fields) {
  return (dispatch) => {

    dispatch(loginStart());

    axios.post('/api/ok.json', fields)
      .then(function(response) {
        if(!response.ok) {
          return dispatch(loginError("Login attempt failed."));
        }
        dispatch(loginSuccess());
      })
      .catch(function(error) {
        dispatch(loginError("Login attempt failed."));
      });

  };
}

export function loginStart() {
  return {
    type: types.LOGIN_START
  };
}

export function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  };
}

export function loginError(payload) {
  return {
    type: types.LOGIN_ERROR,
    payload
  };
}
