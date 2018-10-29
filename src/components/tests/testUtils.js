// Create a store for testing purpuses
import { createStore, combineReducers } from 'redux';
import todos from '../../reducers/todos';

const rootReducer = combineReducers({
  todos
});

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}
