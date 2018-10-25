import rootReducer from './reducers/index';
import { createStore } from 'redux'
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';

const configureStore = () => {
  const localState = loadState();
  const store = createStore(
    rootReducer,
    localState
  );

  store.subscribe(throttle(() => {
    saveState({ 
      todos: store.getState().todos
    });
  }, 1000));

  return store;
}

export default configureStore;