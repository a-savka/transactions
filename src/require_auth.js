import { browserHistory } from 'react-router';

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

  return (nextState, replace) => {
    if(!getAthenticated(store)) {
      replace("/login");
    }
  };

}