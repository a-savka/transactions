import 'whatwg-fetch';
import * as types from './types';
import { banksFetch } from './banks';
import { transactionsFetch } from './transactions';

function loginStart() {
  return {
    type: types.LOGIN_START
  };
}

function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  };
}

function loginError(payload) {
  return {
    type: types.LOGIN_ERROR,
    payload
  };
}


export function login(fields) {
  return (dispatch) => {

    dispatch(loginStart());

    // axios.post('/api/login', fields)
    // Simulating request with get, can't post to static file

    fetch("/api/ok.json").then( response => {
      response.json().then( data => {
        if(!data.ok) {
          return dispatch(loginError("Login attempt failed."));
        }
        dispatch(banksFetch());
        dispatch(transactionsFetch());
        dispatch(loginSuccess());
      });
    }).catch(function(error) {
      dispatch(loginError("Login attempt failed."));
    });

  };
}


export function logout() {
    // we don't need anything from response
    fetch("/api/ok.json");
    return {
      type: types.LOGOUT
    };
}
