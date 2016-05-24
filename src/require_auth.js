import { browserHistory } from 'react-router';

export default function requireAuth(store) {

  let wasAuthenticated = false;

  store.subscribe(() => {
    const authenticated = store.getState().authentication.authenticated;
    if(wasAuthenticated && !authenticated) {
      browserHistory.push("/login");
    }
    wasAuthenticated = authenticated;
  });

  return (nextState, replace) => {
    if(!store.getState().authentication.authenticated) {
      replace("/login");
    }
  };

}
