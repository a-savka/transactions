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

      // Simulate server side storage
      if(localStorage.transactions) {
        action.payload = JSON.parse(localStorage.transactions);
      }

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


    case actionTypes.TRANSACTIONS_ADD_START:
      return {
        ...state,
        loading: true,
        errorMessage: ""
      }

    case actionTypes.TRANSACTIONS_ADD_SUCCESS:

      // Simulate server side storage
      localStorage.transactions = JSON.stringify([...state.items, action.payload]);

      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload]
      }

    case actionTypes.TRANSACTIONS_ADD_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }



  }
  return state;
}
