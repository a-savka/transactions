import * as types from './types';

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

    fetch('/api/banks.json').then( response => {
      response.json().then( data => {
        dispatch(banksFetchSuccess(data.sort(bankComparator)));
      });
    }).catch(function(error) {
      dispatch(banksFetchError("Banks can't be loaded."));
    });

  };
}
