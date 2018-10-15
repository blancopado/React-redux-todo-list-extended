import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Todos from './reducers/todos'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Todos);

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
