import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false
}

export default function banksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.BANKS_FETCH_START:
      return {
        ...state,
        loading: true
      };

    case actionTypes.BANKS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };

    case actionTypes.BANKS_FETCH_SUCCESS:
      return {
        loading: false,
        items: action.payload
      }

  }
  return state;
}
