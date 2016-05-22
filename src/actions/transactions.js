import * as types from './types';
import axios from 'axios';

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


export function transactionsFetch(fields) {

  return (dispatch) => {

    dispatch(transactionsFetchStart());

    axios.get('/api/transactions.json')
      .then(function(response) {
        if(!response.data) {
          return dispatch(transactionsFetchError("Transactions can't be loaded."));
        }
        dispatch(transactionsFetchSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(transactionsFetchError("Transactions can't be loaded."));
      });

  };
}
