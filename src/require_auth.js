import { browserHistory } from 'react-router';
import { loginToPage } from './actions/authentication';

function getAthenticated(store) {
  return store.getState().authentication.authenticated;
}

export default function requireAuth(store) {

  let wasAuthenticated = getAthenticated(store);
  let lastPathName = "";

  store.subscribe(() => {
    const authenticated = getAthenticated(store);
    if(wasAuthenticated && !authenticated) {
      browserHistory.push("/login");
    }
    wasAuthenticated = authenticated;
  });

  return (nextState, replace) => {
    if(!getAthenticated(store)) {
      replace("/login");
      store.dispatch(loginToPage(nextState.location.pathname));
    }

  };

}
