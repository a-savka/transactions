import * as types from './types';
import axios from 'axios';
import { browserHistory } from 'react-router';

// nextTransactionId used to simulate autoincrementing transaction id from server
let nextTransactionId = 0;

function transactionsFetchStart() {
  return {
    type: types.TRANSACTIONS_FETCH_START
  };
}

function transactionsFetchSuccess(payload) {
  return {
    type: types.TRANSACTIONS_FETCH_SUCCESS,
    payload
  };
}

function transactionsFetchError(payload) {
  return {
    type: types.TRANSACTIONS_FETCH_ERROR,
    payload
  };
}


export function transactionsFetch() {

  return (dispatch) => {

    dispatch(transactionsFetchStart());

    axios.get('/api/transactions.json')
      .then(function(response) {
        if(!response.data) {
          return dispatch(transactionsFetchError("Transactions can't be loaded."));
        }

        // Line below needed for transaction id simulation
        if(response.data.length) nextTransactionId = response.data[response.data.length-1].id;

        dispatch(transactionsFetchSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(transactionsFetchError("Transactions can't be loaded."));
      });

  };
}




function transactionsAddStart() {
  return {
    type: types.TRANSACTIONS_ADD_START
  };
}

function transactionsAddSuccess(payload) {
  return {
    type: types.TRANSACTIONS_ADD_SUCCESS,
    payload
  };
}

function transactionsAddError(payload) {
  return {
    type: types.TRANSACTIONS_ADD_ERROR,
    payload
  };
}


export function transactionsAdd(fields) {

  return (dispatch) => {

    dispatch(transactionsAddStart());

    // axios.post('/api/transactions', fields)
    // simulate ajax request with get to ok.json
    axios.get('/api/ok.json')
      .then(function(response) {
        if(!response.data.ok) {
          return dispatch(transactionsAddError("Error, transaction can't be added."));
        }

        // Code to simulate data received from server
          response.data = {
            id: ++nextTransactionId,
            amount: parseFloat(fields.amount),
            bankId: parseInt(fields.bankId)
          }
        // End of code to simulate data received from server

        dispatch(transactionsAddSuccess(response.data));
        browserHistory.push("/");
      })
      .catch(function(error) {
        dispatch(transactionsAddError("Error, transaction can't be added."));
      });

  };
}
