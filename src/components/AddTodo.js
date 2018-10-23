import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const AddTodo = ({ addTodo }) => {
    
  const onSubmitForm = (e) => {
    e.preventDefault();
    let text = e.target.text.value.trim();
    if (!text) return;
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

export default connect(null, { addTodo } )(AddTodo);