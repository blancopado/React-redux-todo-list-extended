import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});
 
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
