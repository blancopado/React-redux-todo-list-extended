import React from 'react';
import Form from './Form';
import VisibleTodos from './VisibleTodos';
import FilterLinkList from './FilterLinkList';

const App = () => {
  return (
    <div data-test="component-app">
      <Form />
      <VisibleTodos />
      <FilterLinkList />
    </div>
  )
}

export default App;