import React from 'react';
import ReactDOM from 'react-dom';
import configuresStore from './configureStore';
import Root from './components/Root';

const store = configuresStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
