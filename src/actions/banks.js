import * as types from './types';
import axios from 'axios';

function banksFetchStart() {
  return {
    type: types.BANKS_FETCH_START
  };
}

function banksFetchSuccess(payload) {
  return {
    type: types.BANKS_FETCH_SUCCESS,
    payload
  };
}

function banksFetchError(payload) {
  return {
    type: types.BANKS_FETCH_ERROR,
    payload
  };
}

function bankComparator(b1, b2) {
  if(b1.name > b2.name) return 1;
  if(b1.name < b2.name) return -1;
  return 0;
}

export function banksFetch(fields) {

  return (dispatch) => {

    dispatch(banksFetchStart());

    axios.get('/api/banks.json')
      .then(function(response) {
        if(!response.data) {
          return dispatch(banksFetchError("Banks can't be loaded."));
        }
        dispatch(banksFetchSuccess(response.data.sort(bankComparator)));
      })
      .catch(function(error) {
        dispatch(banksFetchError("Banks can't be loaded."));
      });

  };
}
