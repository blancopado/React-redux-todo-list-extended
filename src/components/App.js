import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodos from './VisibleTodos';
import FilterLinkList from './FilterLinkList';

const App = () => {
  return (
    <div data-test="component-app">
      <AddTodo />
      <VisibleTodos />
      <FilterLinkList />
    </div>
  )
}

export default App;