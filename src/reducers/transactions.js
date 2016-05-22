import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.TRANSACTIONS_FETCH_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.TRANSACTIONS_FETCH_SUCCESS:
      console.log("Transactons fetch success reducer");
      console.log(action);
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case actionTypes.TRANSACTIONS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };


  }
  return state;
}
