import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';

import Login from './components/login';
import AddTransaction from './components/transactions/add';
import ViewTransactions from './components/transactions/view';
import RequireAuthentication from './components/require_authentication';

require('./stylesheets/main.scss');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>

        <Route path="/">
          <Route path="login" component={ Login }></Route>
          <Route component={ RequireAuthentication }>
            <IndexRoute component={ ViewTransactions }></IndexRoute>
            <Route path="add" component={ AddTransaction }></Route>
          </Route>
        </Route>

      </Router>
    </Provider>,
    document.querySelector('#app_transactions')
  );
});
