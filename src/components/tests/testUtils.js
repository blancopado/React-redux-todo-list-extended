// Create a store for testing purpuses
import { createStore } from 'redux';
import rootReducer from '../../reducers/todos';

export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState);
}
