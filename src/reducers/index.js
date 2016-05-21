import { combineReducers } from 'redux';

import authentication from './authentication';
import transactions from './transactions';
import banks from './banks';
import { reducer as form } from 'redux-form';

export default combineReducers({
  authentication,
  transactions,
  banks,
  form
});
