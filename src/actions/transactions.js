import 'whatwg-fetch';
import * as types from './types';
import { browserHistory } from 'react-router';

// nextTransactionId used to simulate autoincrementing transaction id from server
let nextTransactionId = 0;
if(localStorage.nextTransactionId) {
  nextTransactionId = JSON.parse(localStorage.nextTransactionId);
}

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

    fetch('/api/transactions.json').then( response => {
      response.json().then( data => {

        if(!data) {
          return dispatch(transactionsFetchError("Transactions can't be loaded."));
        }

        // Simulate server side data storage
        if(localStorage.transactions) {
          data = JSON.parse(localStorage.transactions);
        }

        // Line below needed for transaction id simulation
        if(data.length) nextTransactionId = data[data.length-1].id;
        localStorage.nextTransactionId = JSON.stringify(nextTransactionId);

        dispatch(transactionsFetchSuccess(data));

      });
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

    // simulate ajax request with get to ok.json
    fetch('/api/ok.json').then( response => {
      response.json().then( data => {

        if(!data.ok) {
          return dispatch(transactionsAddError("Error, transaction can't be added."));
        }

        // Code to simulate data received from server
        data = {
          id: ++nextTransactionId,
          amount: parseFloat(fields.amount),
          bankId: parseInt(fields.bankId)
        };
        localStorage.nextTransactionId = JSON.stringify(nextTransactionId);
        // End of code to simulate data received from server

        dispatch(transactionsAddSuccess(data));
        browserHistory.push("/");

      });
    })
    .catch(function(error) {
      dispatch(transactionsAddError("Error, transaction can't be added."));
    });

  };
}


export function transactionsDeleteModalShow(transaction) {
  return {
    type: types.TRANSACTIONS_DELETE_MODAL_SHOW,
    payload: transaction
  };
}

export function transactionsDeleteModalHide() {
  return {
    type: types.TRANSACTIONS_DELETE_MODAL_HIDE
  };
}

function transactionsDeleteStart() {
  return {
    type: types.TRANSACTIONS_DELETE_START
  };
}

function transactionsDeleteSuccess(payload) {
  return {
    type: types.TRANSACTIONS_DELETE_SUCCESS,
    payload
  };
}

function transactionsDeleteError(payload) {
  return {
    type: types.TRANSACTIONS_DELETE_ERROR,
    payload
  };
}

export function transactionsDelete(transaction) {

  return (dispatch) => {

    dispatch(transactionsDeleteModalHide());
    dispatch(transactionsDeleteStart());

    // simulate ajax request with get to ok.json
    fetch('/api/ok.json').then( response => {
      response.json().then( data => {
        if(!data.ok) {
          return dispatch(transactionsAddError("Error, transaction can't be deleted."));
        }
        dispatch(transactionsDeleteSuccess(transaction.id));
      });
    })
    .catch(function(error) {
      dispatch(transactionsAddError("Error, transaction can't be deleted."));
    });

  };
}
