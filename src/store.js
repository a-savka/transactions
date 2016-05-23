import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState, { localStorage } from 'redux-localstorage';
import reducer from './reducers';


function serialize(store) {
  return JSON.stringify(store, (key, value) => {
    if(value instanceof Map) {
      return( "Map(" + JSON.stringify([...value]) + ")" );
    }
    return value;
  });
}

function deserialize(store) {
  return JSON.parse(store, (key, value) => {
    if(typeof value == 'string') {
      const match = /^Map\((\[.*\])\)$/.exec(value);
      if(match) {
        return new Map(JSON.parse(match[1]));
      }
    }
    return value;
  });
}

const config = {
  key: "application-state",
  serialize,
  deserialize
};

const createPersistentStore = compose(
  persistState(localStorage, config)
)(createStore);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createPersistentStore);

export default createStoreWithMiddleware(reducer);
