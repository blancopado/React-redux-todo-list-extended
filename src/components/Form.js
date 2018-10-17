import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

class Form extends React.Component {
	onSubmitForm(e) {
		e.preventDefault();
		const todo = {
			id: Date.now(),
			text: e.target.text.value
		}
		e.target.reset();
		this.props.addTodo(todo);
	}

	render() {
		return (
			<div data-test="component-form">
				<form data-test="form" onSubmit={this.onSubmitForm.bind(this)}>
				<input data-test="input-box" type="text" name="text" placeholder="Add a todo" />
				<input data-test="input-submit" type="submit" />
			</form>
		</div>
		);
	}
}

export default connect(null, { addTodo } )(Form);