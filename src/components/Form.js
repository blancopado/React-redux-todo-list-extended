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
		this.props.addTodo(todo);
	}

	render() {
		return (
			<div>
				<form data-test="component-form" onSubmit={this.onSubmitForm.bind(this)}>
				<input type="text" name="text" />
				<input type="submit" />
			</form>
		</div>
		);
	}
}

export default connect(null, { addTodo } )(Form);