import { browserHistory } from 'react-router';
import { loginToPage } from './actions/authentication';

function getAthenticated(store) {
  return store.getState().authentication.authenticated;
}

export default function requireAuth(store) {

  let wasAuthenticated = getAthenticated(store);

  store.subscribe(() => {
    const authenticated = getAthenticated(store);
    if(wasAuthenticated && !authenticated) {
      browserHistory.push("/login");
    }
    wasAuthenticated = authenticated;
  });

  return {
    onEnter: (nextState, replace) => {
      if(!getAthenticated(store)) {
        replace("/login");
      }
      store.dispatch(loginToPage(nextState.location.pathname));
    },
    onChange: (prevState, nextState) => {
      store.dispatch(loginToPage(nextState.location.pathname));
    }
  };

}
