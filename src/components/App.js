import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  return (
    <div data-test="component-app">
    	<Form />
    	<TodoList />
    </div>
  )
}

export default App;