import { combineReducers } from 'redux';

import authentication from './authentication';
import transactions from './transactions';
import { reducer as form } from 'redux-form';

export default combineReducers({
  authentication,
  transactions,
  form
});
