import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './store';

import Login from './components/login';
import AddTransaction from './components/transactions/add';
import ViewTransactions from './components/transactions/view';
import requireAuthentication from './components/require_authentication';

require('./stylesheets/main.scss');


/* Temporary !!!!! */
const reducers = state => state;

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ requireAuthentication(ViewTransactions) }></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/add" component={ requireAuthentication(AddTransaction) }></Route>
      </Router>
    </Provider>,
    document.querySelector('#app_transactions')
  )
});
