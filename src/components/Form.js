import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const Form = ({ addTodo }) => {
    
  const onSubmitForm = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    addTodo(text);
    e.target.reset();
  }

  return (
    <div data-test="component-form">
      <form data-test="form" onSubmit={onSubmitForm}>
        <input data-test="input-box" type="text" name="text" placeholder="Add a todo" />
        <input data-test="input-submit" type="submit" />
      </form>
    </div>
  );
}

export default connect(null, { addTodo } )(Form);