import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodos from './VisibleTodos';
import FilterLinkList from './FilterLinkList';

const App = ({ match }) => {
  return (
    <div data-test="component-app">
      <AddTodo />
      <VisibleTodos filter={match.params.filter || 'all'} />
      <FilterLinkList />
    </div>
  )
}

export default App;