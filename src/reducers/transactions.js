import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.TRANSACTIONS_FETCH_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.TRANSACTIONS_FETCH_SUCCESS:

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
      };

    case actionTypes.TRANSACTIONS_ADD_SUCCESS:

      // Simulate server side storage
      localStorage.transactions = JSON.stringify([...state.items, action.payload]);

      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload]
      };

    case actionTypes.TRANSACTIONS_ADD_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };

      case actionTypes.TRANSACTIONS_DELETE_MODAL_SHOW:
        return {
          ...state,
          deleteItem: action.payload
        };

      case actionTypes.TRANSACTIONS_DELETE_MODAL_HIDE:
        return {
          ...state,
          deleteItem: null
        };

      case actionTypes.TRANSACTIONS_DELETE_SUCCESS:
        const newItems = [ ...state.items.filter( item => item.id != action.payload ) ];

        // Simulate server side storage
        localStorage.transactions = JSON.stringify(newItems);

        return {
          ...state,
          items: newItems
        };





  }
  return state;
}
