import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  loginToPage: "/"
};

export default function authenticationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case actionTypes.LOGIN_START:
      return {
        ...state,
        authenticated: false,
        loading: true,
        errorMessage: ""
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        authenticated: true,
        loading: false
      };

    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        loading: false,
        errorMessage: action.payload
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        authenticated: false,
        loading: false
      };

    case actionTypes.LOGIN_TO_PAGE:
      return {
        ...state,
        nextRoute:  action.payload
      };

  }

  return state;
};
