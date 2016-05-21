import Immutable from 'immutable';
import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false
};

export default function authenticationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.LOGIN_START:
      return {
        authenticated: false,
        loading: true
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        authenticated: true,
        loading: false
      };

    case actionTypes.LOGIN_ERROR:
      return {
        authenticated: false,
        loading: false,
        errorMessage: action.payload
      };

    case actionTypes.LOGOUT:
      return {
        authenticated: false,
        loading: false
      };

  }

  return state;
};
