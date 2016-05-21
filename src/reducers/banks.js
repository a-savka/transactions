import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false,
  loaded: false
}

export default function banksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.BANKS_FETCH_START:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case actionTypes.BANKS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        errorMessage: action.payload
      };

    case actionTypes.BANKS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.payload
      }

  }
  return state;
}
