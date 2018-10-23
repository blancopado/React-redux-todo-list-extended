import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const Form = (props) => {
    
  const onSubmitForm = (e) => {
    e.preventDefault();
    const todo = {
      text: e.target.text.value
    }
    e.target.reset();
    props.addTodo(todo);
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