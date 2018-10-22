import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import FilterLinkList from './FilterLinkList';

const App = () => {
  return (
    <div data-test="component-app">
      <Form />
      <TodoList />
      <FilterLinkList />
    </div>
  )
}

export default App;